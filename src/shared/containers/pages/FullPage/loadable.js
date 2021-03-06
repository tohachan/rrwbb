import React from 'react';
import loadable from '@loadable/component';
import TextPlaceholder from 'shared/components/TextPlaceholder';

const FullPage = loadable(() => import(/* webpackPreload: true */ './FullPage'), {
    fallback: <TextPlaceholder />
});

export default FullPage;
