const fs = require('fs');
const path = require('path');

const pageGenerator = require('./page/index.js');
const componentGenerator = require('./component/index.js');

module.exports = plop => {
    plop.setGenerator('page', pageGenerator);
    plop.setGenerator('component', componentGenerator);
    plop.setActionType('success', function (answers, config, plop) {
        const { path } = config;
        const { name, withLoadable } = answers;
        const componentPath = withLoadable ? path + name + '/loadable' : path + name + '/' + name;

        return `import Component from "${componentPath}"`;
    });
};
