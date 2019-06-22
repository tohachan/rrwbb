import React from 'react';
import loadable from '@loadable/component';
import Placeholder from './placeholder';

const Main = loadable(() => import(/* webpackPreload: true */ './Main'), {
    fallback: <Placeholder />
});

export default Main;
