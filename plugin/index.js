(function (Plugin) {
    'use strict';

    var actions    = require('./actions'),
        controller = require('./controller'),
        filters    = require('./filters'),
        settings   = require('./settings');

    //NodeBB list of Hooks: https://github.com/NodeBB/NodeBB/wiki/Hooks
    Plugin.hooks = {
        actions: actions,
        filters: filters,
        statics: {
            load: function (params, callback) {
                var router                = params.router,
                    middleware            = params.middleware,
                    controllers           = params.controllers,
                    pluginUri             = '/admin/plugins/points',
                    apiUri                = '/api' + pluginUri,

                    renderAdmin           = function (req, res, next) {
                        res.render(pluginUri, {});
                    },

                    renderOverviewSection = function (req, res, next) {
                        controller.getTopUsers(function (error, payload) {
                            if (error) {
                                return res.status(500).json(error);
                            }
                            res.render('client/points/overview', payload);
                        });
                    };

                router.get(pluginUri, middleware.admin.buildHeader, renderAdmin);
                router.get(apiUri, renderAdmin);

                // Overview Page
                router.get('/points', middleware.buildHeader, renderOverviewSection);
                router.get('/api/points', renderOverviewSection);

                settings.init(callback);
            }
        }
    };
})(module.exports);
