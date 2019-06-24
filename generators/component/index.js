/**
 * Component Generator
 */

const COMPONENTS_BASE_PATH = '../src/shared/components/';
const ECHO_BASE_PATH = 'shared/components/';

module.exports = {
    description: 'Create new component',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Type the name',
            default: 'Component',
            validate: value => {
                return value
                    ? true
                    : 'Name is required';
            },
        },
        {
            type: 'confirm',
            name: 'withStyles',
            default: false,
            message:
                'Add styles?',
        },
        {
            type: 'confirm',
            name: 'withLoadable',
            default: true,
            message:
                'Make loadable?',
        },
    ],
    actions: data => {
        const actions = [
            {
                type: 'add',
                path: COMPONENTS_BASE_PATH + '{{name}}/{{name}}.js',
                templateFile: './component/index.js.hbs',
                abortOnFail: true,
            },
        ];

        if (data.withLoadable) {
            actions.push({
                type: 'add',
                path: COMPONENTS_BASE_PATH + '{{name}}/loadable.js',
                templateFile: './component/loadable.js.hbs',
                abortOnFail: true,
            });
        }
        if (data.withStyles) {
            actions.push({
                type: 'add',
                path: COMPONENTS_BASE_PATH + '{{name}}/styles.scss',
                templateFile: './component/styles.scss.hbs',
                abortOnFail: true,
            });
        }

        actions.push({
            type: 'success',
            path: ECHO_BASE_PATH
        });

        return actions;
    },
};
