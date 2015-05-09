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

            done(null, {
                users        : users,
                settings     : settings.get(),
                relative_path: nconf.get('relative_path')
            });
        });
    };

})(module.exports);