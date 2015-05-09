'use strict';

/* globals define, app, ajaxify, bootbox, socket, templates, utils */

define('forum/points/ranking', [], function () {

    var Ranking = {};

    Ranking.defaultRanking = function (settings, points) {
        var accumulatedPoints = 0, level = 0, levelProgress = 0,
            currentLevelTotal = parseInt(settings.basePoints, 10),
            levelGrow         = parseInt(settings.baseGrow, 10);

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
    };

    return Ranking;
});