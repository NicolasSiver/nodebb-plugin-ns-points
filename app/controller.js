(function (Controller) {
    'use strict';

    var async     = require('async'),
        nconf     = require('./nodebb').nconf,

        constants = require('./constants'),
        database  = require('./database'),
        settings  = require('./settings');

    Controller.getTopUsers = function (done) {
        database.getUsers(settings.get().maxUsers, function (error, users) {
            if (error) {
                return done(error);
            }

            var topUsers = {
                users         : users,
                relative_path : nconf.get('relative_path'),
                userTemplate : settings.getUserTemplate()
            };

            Controller.getResponseWithSettings(topUsers, done);
        });
    };

    Controller.getResponseWithSettings = function (response, done) {
        response.pointsSettings = settings.get();
        done(null, response);
    };

})(module.exports);