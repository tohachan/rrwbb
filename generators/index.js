const fs = require('fs');
const path = require('path');

const pageGenerator = require('./page/index.js');

module.exports = plop => {
    plop.setGenerator('page', pageGenerator);
    plop.addHelper('lower', name => name.toLowerCase());
};
