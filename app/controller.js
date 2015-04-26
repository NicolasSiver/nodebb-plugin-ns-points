(function (Controller) {
    'use strict';

    var async     = require('async'),
        nconf     = require('./nodebb').nconf,

        constants = require('./constants'),
        database  = require('./database'),
        settings  = require('./settings');

    Controller.getTopUsers = function (done) {
        var result = {'relative_path': nconf.get('relative_path')};

        database.getUsers(settings.get().maxUsers, function (error, users) {
            if (error) {
                return done(error);
            }
            async.map(users, function (user, next) {
                var ranking = calculateRanking(user.points);
                user.rank = ranking.rank;
                user.progress = (ranking.rankProgress / ranking.rankTotal) * 100;
                user.progressMessage = getProgressMessage(ranking);
                next(null, user);
            }, function (error, results) {
                if (error) {
                    return done(error);
                }
                result.users = results;
                done(null, result);
            });
        });
    };

    function calculateRanking(points) {
        var accumulatedPoints = 0, level = 0, levelProgress = 0,
            currentLevelTotal = settings.get().basePoints, levelGrow = settings.get().baseGrow;

        while (accumulatedPoints <= points) {
            levelProgress = points - accumulatedPoints;
            level++;
            accumulatedPoints += currentLevelTotal;
            currentLevelTotal += levelGrow;
        }

        return {
            rank        : level,
            rankProgress: levelProgress,
            rankTotal   : currentLevelTotal - levelGrow,
            total       : points
        };
    }

    function getProgressMessage(ranking) {
        return ranking.rankProgress + ' / ' + ranking.rankTotal;
    }

})(module.exports);