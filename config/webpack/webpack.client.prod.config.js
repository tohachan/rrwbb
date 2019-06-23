const fs = require('fs');
const path = require('path');
const merge = require('webpack-merge');
const glob = require('glob');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const baseConfig = require('./webpack.base.prod.config');

const appDirectory = fs.realpathSync(process.cwd());

const config = {
    mode: 'production',

    entry: [
        './src/client/index.js'
    ],

    target: 'web',

    output: {
        path: path.join(appDirectory, "build", "public"),
        filename: "[name].bundle.js",
        chunkFilename: '[contenthash].js',
        publicPath: "./build/public/"
    },

    devtool: 'hidden-source-map',

    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: ExtractCssChunks.loader,
                        options: {
                            minimize: true
                        }
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },

    plugins: [
        new LoadablePlugin(),
        new ExtractCssChunks({filename: "[name].css", chunkFilename: "[id].css"}),
        new PurgecssPlugin({
            paths: glob.sync(path.join(appDirectory, 'src') + '/**/*',  { nodir: true }),
        }),
        // new OfflinePlugin({
        //     responseStrategy: "network-first",
        //     ServiceWorker: {
        //         scope: "http://localhost:3000/"
        //     },
        //     publicPath: "/"
        // })
    ],

    optimization: {
        minimizer: [
            new TerserJSPlugin({
                sourceMap: true,
                // TerserPlugin config is taken almost entirely from react-scripts
                terserOptions: {
                    parse: {
                        // we want terser to parse ecma 8 code. However, we don't want it
                        // to apply any minfication steps that turns valid ecma 5 code
                        // into invalid ecma 5 code. This is why the 'compress' and 'output'
                        // sections only apply transformations that are ecma 5 safe
                        // https://github.com/facebook/create-react-app/pull/4234
                        ecma: 8,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        // Disabled because of an issue with Uglify breaking seemingly valid code:
                        // https://github.com/facebook/create-react-app/issues/2376
                        // Pending further investigation:
                        // https://github.com/mishoo/UglifyJS2/issues/2011
                        comparisons: false,
                        // Disabled because of an issue with Terser breaking valid code:
                        // https://github.com/facebook/create-react-app/issues/5250
                        // Pending futher investigation:
                        // https://github.com/terser-js/terser/issues/120
                        inline: 2,
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        // Turned on because emoji and regex is not minified properly using default
                        // https://github.com/facebook/create-react-app/issues/2488
                        ascii_only: true,
                    },
                },
                // Use multi-process parallel running to improve the build speed
                // Default number of concurrent runs: os.cpus().length - 1
                parallel: true,
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: {
            chunks: 'async',
            // minSize: 30000,
            minChunks: 1,
            // maxAsyncRequests: 5,
            // maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    // minChunks: 2,
                    // priority: -20,
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
