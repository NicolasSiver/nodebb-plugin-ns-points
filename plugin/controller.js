(function (Controller) {
    'use strict';

    const async      = require('async'),
          benchpress = require('./nodebb').benchpress,
          nconf      = require('./nodebb').nconf;

    const database = require('./database'),
          Ranking  = require('./default-ranking'),
          files    = require('./files'),
          settings = require('./settings');

    Controller.getCalculationProperties = function (done) {
        async.waterfall([
            async.apply(settings.getData),
            function (cachedSettings, next) {
                let result = Object.assign({}, cachedSettings);
                delete result.maxUsers;
                next(null, result);
            }
        ], done);
    };

    Controller.getSettings = function (done) {
        async.waterfall([
            async.apply(settings.getData),
            function (settings, callback) {
                callback(null, {
                    maxUsers: settings.maxUsers
                });
            }
        ], done);
    };

    Controller.getTopUsers = function (done) {
        let templateData, rankMeta;

        async.waterfall([
            function (next) {
                async.parallel({
                    settingsData: async.apply(settings.getData),
                    userTemplate: async.apply(files.getUserTemplate)
                }, next);
            },
            function (payload, next) {
                database.getUsers(payload.settingsData.maxUsers - 1, function (error, users) {
                    if (error) {
                        return next(error);
                    }

                    async.map(
                        users,
                        (user, callback) => {
                            rankMeta = Ranking.compute(payload.settingsData, user.points);

                            templateData = Object.assign(
                                {
                                    progress     : rankMeta.rankProgress / rankMeta.rankTotal * 100,
                                    rank         : rankMeta.rank,
                                    rankProgress : `${rankMeta.rankProgress} / ${rankMeta.rankTotal}`,
                                    relative_path: nconf.get('relative_path')
                                },
                                user
                            );

                            benchpress
                                .compileRender(payload.userTemplate, templateData)
                                .then(template => {
                                    callback(null, template);
                                });
                        },
                        next
                    );
                });
            },
            (users, next) => next(null, {users})
        ], done);
    };

    Controller.injectSettings = function (response, done) {
        async.waterfall([
            async.apply(settings.getData),
            function (settingsData, next) {
                response.pointsSettings = settingsData;
                next(null, response);
            }
        ], done);
    };

    Controller.saveCalculationProperties = function (payload, done) {
        let scheme = [
            'postWeight', 'topicWeight',
            'reputationWeight', 'reputationActionWeight',
            'basePoints', 'baseGrow'
        ];
        async.waterfall([
            function composePayload(callback) {
                let result = {}, value;
                scheme.forEach(function (field) {
                    value = payload[field];
                    if (payload.hasOwnProperty(field) && value) {
                        result[field] = parseInt(value, 10);
                    }
                });
                callback(null, result);
            },
            function save(data, callback) {
                settings.save(data, callback);
            }
        ], done);
    };

    Controller.saveSettings = function (payload, done) {
        async.waterfall([
            function validatePayload(callback) {
                let users = parseInt(payload.maxUsers);
                if (isNaN(users)) {
                    return callback(new Error('Max Users is not a number.'));
                }
                callback(null, users);
            },
            function save(users, callback) {
                settings.save({
                    maxUsers: users
                }, callback);
            }
        ], done);
    };

})(module.exports);
