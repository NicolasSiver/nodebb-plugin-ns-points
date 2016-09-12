var path    = require('path'),
    webpack = require('webpack');

module.exports = {
    entry       : "./index.js",
    output      : {
        path         : "../../public/js",
        filename     : "acp.js",
        libraryTarget: "amd",
        library      : "admin/plugins/points"
    },
    module      : {
        loaders: [
            {
                test   : /\.jsx?$/,
                exclude: /node_modules/,
                loader : 'babel-loader',
                query  : {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    watchOptions: {
        poll: 1000
    },
    plugins     : [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};
