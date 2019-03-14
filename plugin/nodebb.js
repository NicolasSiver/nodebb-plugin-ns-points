(function (Module, NodeBB) {
    'use strict';

    Module.exports = {
        adminSockets : NodeBB.require('./src/socket.io/admin').plugins,
        db           : NodeBB.require('./src/database'),
        meta         : NodeBB.require('./src/meta'),
        pluginSockets: NodeBB.require('./src/socket.io/plugins'),
        postTools    : NodeBB.require('./src/posts/tools'),
        settings     : NodeBB.require('./src/settings'),
        socketIndex  : NodeBB.require('./src/socket.io/index'),
        topics       : NodeBB.require('./src/topics'),
        user         : NodeBB.require('./src/user'),

        benchpress: NodeBB.require('benchpressjs'),
        nconf   : NodeBB.require('nconf')
    };

})(module, require.main);
