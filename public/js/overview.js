'use strict';

/* globals define, app, ajaxify, bootbox, socket, templates, utils */

define('forum/client/points/overview', ['components', 'forum/points/ranking'], function (components, ranking) {

    var Overview = {};

    Overview.init = function () {
        $('[component="points/top-user"]').each(function (index, userDomElement) {
            var element     = $(this),
                points      = element.data('points'),
                basePoints  = ajaxify.variables.get('basePoints'),
                baseGrow    = ajaxify.variables.get('baseGrow'),
                rankMeta    = ranking.defaultRanking({
                    basePoints: basePoints,
                    baseGrow  : baseGrow
                }, points),
                progressBar = element.find('.progress-bar'),
                progress    = rankMeta.rankProgress / rankMeta.rankTotal * 100;

            element.find('.rank').text(rankMeta.rank);
            element.find('.rank-progress').text(getProgressMessage(rankMeta));

            //TODO Add Stugger animation for progress bars
            progressBar.data('valuenow', progress);
            progressBar.css('width', progress + '%');
        });
    };

    function getProgressMessage(rankMeta) {
        return rankMeta.rankProgress + ' / ' + rankMeta.rankTotal;
    }

    return Overview;
});