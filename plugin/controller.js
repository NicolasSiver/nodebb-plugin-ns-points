(function (Controller) {
    'use strict';

    var async        = require('async'),
        nconf        = require('./nodebb').nconf,
        objectAssign = require('object-assign');

    var database = require('./database'),
        files    = require('./files'),
        settings = require('./settings');

    Controller.getCalculationProperties = function (done) {
        async.waterfall([
            async.apply(settings.getData),
            function (cachedSettings, next) {
                var result = objectAssign({}, cachedSettings);
                delete result.maxUsers;
                next(null, result);
            }
        ], done);
    };

    Controller.getTopUsers = function (done) {
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

                    next(null, {
                        relative_path: nconf.get('relative_path'),
                        users        : users,
                        userTemplate : payload.userTemplate
                    });
                });
            },
            function (topUsers, next) {
                Controller.injectSettings(topUsers, next);
            }
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

})(module.exports);
