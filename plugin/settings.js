(function (Settings) {
    'use strict';

    var objectAssign = require('object-assign');

    var meta      = require('./nodebb').meta,
        constants = require('./constants');

    //Memory cache
    var settingsCache = null,
        defaults      = {
            postWeight            : 1,
            topicWeight           : 4,
            reputationWeight      : 2,
            reputationActionWeight: 1,
            maxUsers              : 20,

            basePoints: 10,
            baseGrow  : 4
        };

    Settings.init = function (done) {
        meta.settings.get(constants.NAMESPACE, function (error, settings) {
            if (error) {
                return done(error);
            }
            settingsCache = objectAssign(defaults, settings);
            done(null);
        });
    };

    /**
     * @deprecated since version 4.0.0
     */
    Settings.get = function () {
        return settingsCache;
    };

    Settings.getData = function (done) {
        done(null, settingsCache);
    };

    Settings.save = function (settings, done) {
        settingsCache = objectAssign(settingsCache, settings);
        meta.settings.set(constants.NAMESPACE, settingsCache, function (error) {
            done(error, settingsCache);
        });
    };

})(module.exports);
