import React from 'react';
import loadable from '@loadable/component';
import TextPlaceholder from 'shared/components/TextPlaceholder';

const Main = loadable(() => import(/* webpackPreload: true */ './Main'), {
    fallback: <TextPlaceholder />
});

export default Main;
