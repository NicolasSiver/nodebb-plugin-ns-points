(function (Database) {
    'use strict';

    var async     = require('async'),
        db        = require('./nodebb').db,
        constants = require('./constants'),
        namespace = constants.NAMESPACE;

    //TODO Remove Points object if User is deleted or create utility method for ACP
    Database.delete = function (uid, done) {
        db.sortedSetRemove(namespace, uid, done);
    };

    Database.getPoints = function (uid, done) {
        db.sortedSetScore(namespace, uid, done);
    };

    Database.incrementBy = function (uid, increment, done) {
        db.sortedSetIncrBy(namespace, increment, uid, done);
    };

})(module.exports);