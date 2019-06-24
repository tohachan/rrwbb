const fs = require('fs');
const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackNodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.base.dev.config');

const appDirectory = fs.realpathSync(process.cwd());

const config = {
    name: 'server',
    target: 'node',

    mode: 'development',

    entry: path.join(__dirname, '../../src/server/index-hot.js'),

    externals: [webpackNodeExternals()],

    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: 'null-loader'
            }
        ]
    },

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../../build'),
        libraryTarget: 'commonjs2'
    },

    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        })
    ]
};

module.exports = merge(baseConfig, config);
