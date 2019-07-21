const config = require('./config/babel/config');

module.exports = function(api) {
    api.cache(false);
    
    return config;
};
