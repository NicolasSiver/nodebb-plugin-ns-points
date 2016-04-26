(function (Controller) {
    'use strict';

    var async    = require('async'),
        nconf    = require('./nodebb').nconf,

        database = require('./database'),
        settings = require('./settings');

    Controller.getTopUsers = function (done) {
        async.waterfall([
            async.apply(settings.getData),
            function (settingsData, next) {
                database.getUsers(settingsData.maxUsers - 1, function (error, users) {
                    if (error) {
                        return next(error);
                    }

                    next(null, {
                        relative_path: nconf.get('relative_path'),
                        users        : users,
                        userTemplate : settings.getUserTemplate()
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
