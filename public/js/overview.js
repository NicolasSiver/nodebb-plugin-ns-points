'use strict';

/* globals define, app, ajaxify, bootbox, socket, templates, utils */

define('forum/client/points/overview', ['components', 'forum/points/ranking'], function (components, ranking) {

    var Overview  = {},
        columns   = 3,
        className = 'col-lg-3 col-md-4 col-xs-12';

    Overview.init = function () {
        var container = document.getElementsByClassName('points-users')[0];
        var i, len = ajaxify.data.users.length, payload, htmlRow, htmlUser, rankMeta, progress;

        for (i = 0; i < len; ++i) {
            payload = ajaxify.data.users[i];

            if (i % columns == 0) {
                htmlRow = document.createElement('div');
                container.appendChild(htmlRow);
            }

            //Calculation
            rankMeta = ranking.defaultRanking({
                basePoints: ajaxify.data.pointsSettings.basePoints,
                baseGrow  : ajaxify.data.pointsSettings.baseGrow
            }, payload.points);
            progress = rankMeta.rankProgress / rankMeta.rankTotal * 100;

            //Inject additional parameters
            payload.relative_path = ajaxify.data.relative_path;
            payload.rank = rankMeta.rank;
            payload.rankProgress = getProgressMessage(rankMeta);

            htmlUser = document.createElement('div');
            htmlUser.className = className;
            htmlUser.innerHTML = templates.parse(ajaxify.data.userTemplate, payload);
            htmlRow.appendChild(htmlUser);
        }

        //$('[component="points/top-user"]').each(function (index, userDomElement) {
        //    var element     = $(this),
        //        points      = element.data('points'),
        //        basePoints  = ajaxify.data.pointsSettings.basePoints,
        //        baseGrow    = ajaxify.data.pointsSettings.baseGrow,
        //        rankMeta    = ranking.defaultRanking({
        //            basePoints: basePoints,
        //            baseGrow  : baseGrow
        //        }, points),
        //        progressBar = element.find('.progress-bar'),
        //        progress    = rankMeta.rankProgress / rankMeta.rankTotal * 100;
        //
        //    element.find('.rank').text(rankMeta.rank);
        //    element.find('.rank-progress').text(getProgressMessage(rankMeta));
        //
        //    //TODO Add Stugger animation for progress bars
        //    progressBar.data('valuenow', progress);
        //    progressBar.css('width', progress + '%');
        //});
    };

    function getProgressMessage(rankMeta) {
        return rankMeta.rankProgress + ' / ' + rankMeta.rankTotal;
    }

    return Overview;
});