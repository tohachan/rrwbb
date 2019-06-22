import React from 'react';
import loadable from '@loadable/component';
import Placeholder from './placeholder';

const FullPage = loadable(() => import(/* webpackPreload: true */ './FullPage'), {
    fallback: <Placeholder />
});

export default FullPage;
