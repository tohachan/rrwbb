const replace = require('replace-in-file');

/**
* Create spaces
**/
function s(len) {
    return (new Array(len)).fill(" ").join("");
}

/**
* Parse Routes.js and add import and route to new page
**/
function addRoute (route, component, path) {
    return replace.sync({
        files: 'src/shared/Routes.js',
        from: [
            /\n\/\* route generator import anchor \*\//g,
            /\n\s{4}\/\* route generator anchor \*\//g
        ],
        to: [
            (match) => `\nimport ${component} from '${path}';` + match,
            (match) => `\n${s(4)}{\n${s(8)}path: '${route}',\n${s(8)}component: ${component}\n${s(4)}},` + match
        ]
    });
}

module.exports = addRoute;
