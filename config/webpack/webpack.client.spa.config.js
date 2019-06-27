const fs = require('fs');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const baseClientConfig = require('./webpack.client.prod.config');
const appDirectory = fs.realpathSync(process.cwd());
const enLocale = require(path.join(appDirectory, 'assets', 'intl', 'en-US.json'));

const config = {
    entry: [
        './src/client/index-spa.js'
    ],

    output: {
        path: path.join(appDirectory, 'build', 'public'),
        filename: '[name].bundle.js',
        chunkFilename: '[contenthash].js',
        publicPath: '/'
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(appDirectory, 'src', 'client', 'index-spa.html'),
            templateParameters: {
                store: JSON.stringify({
                    i18n: {
                        'en-US': enLocale,
                        'ru-RU': {}
                    }
                })
            }
        }),
        new CopyPlugin([
            { from: path.join(appDirectory, 'assets', 'image'), to: path.join(appDirectory, 'build', 'public', 'images') },
            { from: path.join(appDirectory, 'assets', 'intl'), to: path.join(appDirectory, 'build', 'public', 'intl') },
            { from: path.join(appDirectory, 'assets', 'manifest'), to: path.join(appDirectory, 'build', 'public') },
        ]),
    ],
};

module.exports = merge.strategy({ entry: 'replace', output: 'replace' })(baseClientConfig, config);
