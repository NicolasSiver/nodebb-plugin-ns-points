(function (Database) {
    'use strict';

    const async = require('async');

    const nodebb    = require('./nodebb'),
          constants = require('./constants');

    const db   = nodebb.db,
          user = nodebb.user;

    //FIXME Remove Points object if User is deleted or create utility method for ACP
    Database.delete = function (uid, done) {
        db.sortedSetRemove(constants.NAMESPACE, uid, done);
    };

    Database.getPoints = function (uid, done) {
        db.sortedSetScore(constants.NAMESPACE, uid, done);
    };

    Database.getUsers = function (limit, done) {
        async.waterfall([
            async.apply(db.getSortedSetRevRangeWithScores, constants.NAMESPACE, 0, limit),
            function (scoredUsers, next) {
                var scores = {},
                    ids    = scoredUsers.map(function (scoredUser) {
                        scores[scoredUser.value] = scoredUser.score;
                        return scoredUser.value;
                    });
                next(null, ids, scores);
            },
            function (uids, scoreMap, next) {
                user.getUsersFields(uids, ['picture', 'username', 'userslug'], function (error, users) {
                    if (error) {
                        return next(error);
                    }

                    next(null, users.map(function (user) {
                        user.points = scoreMap[user.uid] || 0;
                        return user;
                    }));
                });
            }
        ], done);
    };

    Database.incrementBy = function (uid, increment, done) {
        db.sortedSetIncrBy(constants.NAMESPACE, increment, uid, done);
    };

})(module.exports);
