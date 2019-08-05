import React from 'react';
import loadable from '@loadable/component';
import TextPlaceholder from 'shared/components/TextPlaceholder';

const SubPage = loadable(() => import(/* webpackPreload: true */ './SubPage'), {
    fallback: <TextPlaceholder />
});

export default SubPage;
