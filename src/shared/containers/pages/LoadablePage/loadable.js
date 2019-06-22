import React from 'react';
import loadable from '@loadable/component';
import Placeholder from './placeholder';

const LoadablePage = loadable(() => import(/* webpackPreload: true */ './LoadablePage'), {
    fallback: <Placeholder />
});

export default LoadablePage;
