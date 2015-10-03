'use strict';

/* globals define, app, ajaxify, bootbox, socket, templates, utils */

define('forum/client/points/overview', ['components', 'forum/points/ranking'], function (components, ranking) {

    var Overview  = {},
        columns   = 4,
        className = 'col-lg-3 col-md-3 col-xs-12 points-fade-in',
        delay     = 0.1;

    Overview.init = function () {
        var container = document.getElementsByClassName('points-users')[0];
        var i, len = ajaxify.data.users.length, payload, htmlRow, htmlUser, rankMeta;

        for (i = 0; i < len; ++i) {
            payload = ajaxify.data.users[i];

            if (i % columns == 0) {
                htmlRow = document.createElement('div');
                htmlRow.className = 'row';
                container.appendChild(htmlRow);
            }

            //Calculation
            rankMeta = ranking.defaultRanking({
                basePoints: ajaxify.data.pointsSettings.basePoints,
                baseGrow  : ajaxify.data.pointsSettings.baseGrow
            }, payload.points);

            //Inject additional parameters
            payload.relative_path = ajaxify.data.relative_path;
            payload.rank = rankMeta.rank;
            payload.rankProgress = getProgressMessage(rankMeta);
            payload.progress = rankMeta.rankProgress / rankMeta.rankTotal * 100;

            htmlUser = document.createElement('div');
            htmlUser.className = className;
            htmlUser.style['animation-delay'] = delay * i + 's';
            htmlUser.innerHTML = templates.parse(ajaxify.data.userTemplate, payload);
            htmlRow.appendChild(htmlUser);
        }
    };

    function getProgressMessage(rankMeta) {
        return rankMeta.rankProgress + ' / ' + rankMeta.rankTotal;
    }

    return Overview;
});