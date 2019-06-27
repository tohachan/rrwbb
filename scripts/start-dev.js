/**
*
* Starts local dev server with HMR
*
**/
const express = require('express');
const path = require('path');

const cookieParser = require('cookie-parser');
const webpack = require('webpack');
const clientConfig = require('../config/webpack/webpack.client.dev.config.js');
const serverConfig = require('../config/webpack/webpack.server.dev.config.js');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

// const envConfig = require('../config/env');

// console.log('env config: ', envConfig);

const app = express();

const multiCompiler = webpack([clientConfig, serverConfig]);
const clientCompiler = multiCompiler.compilers.find((compiler) => compiler.name === 'client');
const serverCompiler = multiCompiler.compilers.find((compiler) => compiler.name === 'server');

let isStarted = false;

app.use('/images', express.static(path.resolve(process.cwd(), 'assets/image')));
app.use('/manifest', express.static(path.resolve(process.cwd(), 'assets/manifest')));
app.use('/intl', express.static(path.resolve(process.cwd(), 'assets/intl')));
app.use('/manifest.json', express.static(path.resolve(process.cwd(), 'assets/manifest/manifest.json')));

app.use(cookieParser());

app.use(
    webpackDevMiddleware(multiCompiler, {
        logLevel: 'trace',
        publicPath: clientConfig.output.publicPath,
    })
);

app.use(webpackHotMiddleware(clientCompiler, {
    path: '/__webpack_hmr'
}));
app.use(webpackHotServerMiddleware(multiCompiler, {
    serverRendererOptions: { outputPath: clientConfig.output.path },
}));

// Add multiCompiler done hook for nice console output
multiCompiler.hooks.done.tap('startSsr', () => {
    // prevent server to try to start again after hot reload
    if (!isStarted) {
        app.listen(3000, () => {
            console.log('Running on http://localhost:3000/');
        });
        isStarted = true;
    }
});
