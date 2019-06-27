/**
 * Entry for prod server
 */

const fs = require('fs');
import express from 'express';
import path from 'path';

const cookieParser = require('cookie-parser');

const appDirectory = fs.realpathSync(process.cwd());
const statsFile = path.join(appDirectory, 'build', 'public', 'loadable-stats.json');

const envConfig = require('../../config/env');

import serverRenderer from './renderer';

// Express
const app = express();

const PORT = 3000;

if (envConfig.useCompression) {
    const compression = require('compression');
    app.use(compression());
}

app.use('/build', express.static(path.resolve(process.cwd(), 'build')));
app.use('/build/public', express.static(path.resolve(process.cwd(), 'build/public')));
app.use('/images', express.static(path.resolve(process.cwd(), 'assets/image')));
app.use('/manifest', express.static(path.resolve(process.cwd(), 'assets/manifest')));
app.use('/manifest.json', express.static(path.resolve(process.cwd(), 'assets/manifest/manifest.json')));
app.use('/intl', express.static(path.resolve(process.cwd(), 'assets/intl')));
app.use('/sw.js', express.static(path.resolve(process.cwd(), 'build/public/sw.js')));
app.use('/robots.txt', express.static(path.resolve(process.cwd(), 'robots.txt')));

app.use(cookieParser());

app.get('*', serverRenderer({ clientStats: statsFile, hot: false }));

app.listen(PORT, () => {
    console.log('Server running on http://localhost: ' + PORT);
});
