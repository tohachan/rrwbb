const fs = require('fs');
const path = require('path');

const addRoute = require('./addroute');

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
    plop.setActionType('addRoute', function (answers, config, plop) {
        const { path } = config;
        const { route, name } = answers;
        const pagePath = path + name + '/loadable';

        addRoute(route, name, pagePath);

        return `Route created`;
    });
};
