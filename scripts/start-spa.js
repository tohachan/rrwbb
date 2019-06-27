/**
 * Starts local server for SPA build
 */

const fs = require('fs');
const express = require('express');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const envConfig = require('../config/env');

// Express
const app = express();
const PORT = 4000;

if (envConfig.useCompression) {
    const compression = require('compression');
    app.use(compression());
}

app.use(express.static(path.resolve(process.cwd(), 'build/public')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(process.cwd(), 'build', 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server running on http://localhost: ' + PORT);
});
