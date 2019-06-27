let config;

if (process.env.NODE_ENV) {
    config = require('./config.' + process.env.NODE_ENV + '.json');
} else {
    config = {};
}

module.exports = config;
