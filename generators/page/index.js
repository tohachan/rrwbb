/**
 * Page Generator
 */

const PAGES_BASE_PATH = '../src/shared/containers/pages/';

module.exports = {
    description: 'Create new page',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Type the name',
            default: 'NewPage',
            validate: value => {
                return value
                    ? true
                    : 'Name is required';
            },
        },
        {
            type: 'confirm',
            name: 'withStyles',
            default: true,
            message:
                'Add styles?',
        },
        {
            type: 'confirm',
            name: 'withRedux',
            default: true,
            message:
                'Add reducer, constants and actions?',
        },
        {
            type: 'confirm',
            name: 'withSaga',
            default: true,
            message: 'Add saga?',
        },
    ],
    actions: data => {
        const actions = [
            {
                type: 'add',
                path: PAGES_BASE_PATH + '{{name}}/{{name}}.js',
                templateFile: './page/index.js.hbs',
                abortOnFail: true,
            },
            {
                type: 'add',
                path: PAGES_BASE_PATH + '{{name}}/loadable.js',
                templateFile: './page/loadable.js.hbs',
                abortOnFail: true,
            },
        ];

        if (data.withStyles) {
            actions.push({
                type: 'add',
                path: PAGES_BASE_PATH + '{{name}}/styles.scss',
                templateFile: './page/styles.scss.hbs',
                abortOnFail: true,
            });
        }

        if (data.withRedux) {
            actions.push({
                type: 'add',
                path: PAGES_BASE_PATH + '{{name}}/constants.js',
                templateFile: './page/constants.js.hbs',
                abortOnFail: true,
            });
            actions.push({
                type: 'add',
                path: PAGES_BASE_PATH + '{{name}}/actions.js',
                templateFile: './page/actions.js.hbs',
                abortOnFail: true,
            });
            actions.push({
                type: 'add',
                path: PAGES_BASE_PATH + '{{name}}/reducer.js',
                templateFile: './page/reducer.js.hbs',
                abortOnFail: true,
            });
        }

        if (data.withSaga) {
            actions.push({
                type: 'add',
                path: PAGES_BASE_PATH + '{{name}}/saga.js',
                templateFile: './page/saga.js.hbs',
                abortOnFail: true,
            });
        }

        return actions;
    },
};
