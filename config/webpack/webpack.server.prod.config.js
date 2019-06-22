const fs = require('fs');
const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.base.prod.config');

const appDirectory = fs.realpathSync(process.cwd());

const config = {
    target: 'node',

    mode: 'production',

    entry: './src/server/index.js',

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
        path: path.resolve(appDirectory, 'build')
    }
};

module.exports = merge(baseConfig, config);
