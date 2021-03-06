module.exports = {
    'presets': ['@babel/env', '@babel/react'],
    'plugins': [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-runtime',
        '@babel/plugin-syntax-dynamic-import',
        '@loadable/babel-plugin',
        'react-hot-loader/babel',

        ['module-resolver', {
            'root': ['./src']
        }]
    ]
};
