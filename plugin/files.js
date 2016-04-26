(function (Files) {
    'use strict';

    var fs   = require('fs'),
        path = require('path');

    var userTemplate = null;

    Files.init = function (done) {
        fs.readFile(
            path.resolve(__dirname, '../public', './templates/client/points/user.tpl'),
            'utf8',
            function (error, template) {
                if (error) {
                    return done(error);
                }
                userTemplate = template;
                done(null);
            });
    };

    Files.getUserTemplate = function (done) {
        done(null, userTemplate);
    };

})(module.exports);
