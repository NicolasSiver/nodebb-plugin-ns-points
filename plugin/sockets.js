(function (Sockets) {
    'use strict';

    var constants  = require('./constants'),
        controller = require('./controller'),
        nodebb     = require('./nodebb'),
        settings   = require('./settings');

    var sockets = nodebb.pluginSockets;

    Sockets.init = function (callback) {
        sockets[constants.SOCKETS] = {};
        //Acknowledgements
        sockets[constants.SOCKETS].getCalculationProperties = Sockets.getCalculationProperties;

        callback();
    };

    Sockets.getCalculationProperties = function (socket, payload, callback) {
        controller.getCalculationProperties(callback);
    };

})(module.exports);
