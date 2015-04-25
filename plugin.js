(function (Plugin) {
    'use strict';

    var actions  = require('./app/actions'),
        filters  = require('./app/filters'),
        settings = require('./app/settings');

    //NodeBB list of Hooks: https://github.com/NodeBB/NodeBB/wiki/Hooks
    Plugin.hooks = {
        actions: actions,
        filters: filters,
        statics: {
            load: function (params, callback) {
                var router      = params.router,
                    middleware  = params.middleware,
                    controllers = params.controllers,
                    pluginUri   = '/admin/plugins/points',
                    apiUri      = '/api' + pluginUri,
                    renderAdmin = function (req, res, next) {
                        res.render(
                            'admin/plugins/points', {}
                        );
                    };

                router.get(pluginUri, middleware.admin.buildHeader, renderAdmin);
                router.get(apiUri, renderAdmin);

                settings.init(callback);
            }
        }
    };
})(module.exports);