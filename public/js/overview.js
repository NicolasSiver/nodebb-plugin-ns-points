'use strict';

/* globals define, app, ajaxify, bootbox, socket, templates, utils */

define('forum/client/points/overview', ['forum/points/ranking', 'benchpress'], function (ranking, Benchpress) {

    var Overview  = {},
        columns   = 4,
        className = 'col-lg-3 col-md-3 col-xs-12 points-fade-in',
        delay     = 0.1;

    Overview.init = function () {
        var users = ajaxify.data.users;

        if (users.length > 0) {
            Benchpress.registerLoader(function (name) {
                if (name === 'ns-points') {
                    return Promise.resolve(function () {
                        return ajaxify.data.userTemplate;
                    });
                }
            });

            renderUser(
                document.getElementsByClassName('points-users')[0], null, 0, users
            );
        }
    };

    function getProgressMessage(rankMeta) {
        return rankMeta.rankProgress + ' / ' + rankMeta.rankTotal;
    }

    function renderUser(container, row, cursor, users) {
        var htmlRow, htmlUser, rankMeta;
        var payload = users[cursor];

        if (cursor % columns === 0) {
            htmlRow = document.createElement('div');
            htmlRow.className = 'row';
            container.appendChild(htmlRow);
        } else {
            htmlRow = row;
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
        htmlUser.style['animation-delay'] = delay * cursor + 's';

        Benchpress
            .render('ns-points', payload)
            .then(function (content) {
                htmlUser.innerHTML = content;
                htmlRow.appendChild(htmlUser);

                if (cursor + 1 < users.length) {
                    renderUser(container, htmlRow, cursor + 1, users);
                }
            });
    }

    return Overview;
});
