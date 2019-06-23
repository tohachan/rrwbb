import React from 'react';
import loadable from '@loadable/component';
import TextPlaceholder from 'shared/components/TextPlaceholder';

const LoadablePage = loadable(() => import(/* webpackPreload: true */ './LoadablePage'), {
    fallback: <TextPlaceholder />
});

export default LoadablePage;
