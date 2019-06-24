const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');

const glob = require('glob');
const PurgecssPlugin = require('purgecss-webpack-plugin');

const baseConfig = require('./webpack.base.dev.config');

const appDirectory = fs.realpathSync(process.cwd());

const PATHS = {
    src: path.join(__dirname, 'src')
};

const config = {
    name: 'client',
    mode: 'development',
    target: 'web',
    devtool: 'inline-source-map',

    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '../../src/client/index.js'),
    ],

    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },

    output: {
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[name].[contenthash].js'
    },

    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: ExtractCssChunks.loader,
                        options: {
                            hot: true,
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new LoadablePlugin(),
        new ExtractCssChunks({filename: '[name].css', chunkFilename: '[id].css'})
    ],

    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                },
                styles : {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'async',
                    enforce: true
                },
            }
        }
    }
};

module.exports = merge(baseConfig, config);
