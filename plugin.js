(function (Plugin) {
    'use strict';

    var actions    = require('./app/actions'),
        filters    = require('./app/filters'),
        settings   = require('./app/settings'),
        controller = require('./app/controller');

    //NodeBB list of Hooks: https://github.com/NodeBB/NodeBB/wiki/Hooks
    Plugin.hooks = {
        actions: actions,
        filters: filters,
        statics: {
            load: function (params, callback) {
                var router       = params.router,
                    middleware   = params.middleware,
                    controllers  = params.controllers,
                    pluginUri    = '/admin/plugins/points',
                    apiUri       = '/api' + pluginUri,
                    renderAdmin  = function (req, res, next) {
                        res.render(
                            'admin/plugins/points', {}
                        );
                    },
                    renderClient = function (req, res, next) {
                        controller.getTopUsers(function (error, payload) {
                            if (error) {
                                return res.status(500).json(error);
                            }
                            res.render(
                                'client/points/overview', payload
                            );
                        });
                    };

                router.get(pluginUri, middleware.admin.buildHeader, renderAdmin);
                router.get(apiUri, renderAdmin);

                //Client page
                router.get('/points', middleware.buildHeader, renderClient);
                router.get('/api/points', renderClient);

                settings.init(callback);
            }
        }
    };
})(module.exports);