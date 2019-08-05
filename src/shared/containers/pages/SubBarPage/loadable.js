import React from 'react';
import loadable from '@loadable/component';
import TextPlaceholder from 'shared/components/TextPlaceholder';

const SubBarPage = loadable(() => import(/* webpackPreload: true */ './SubBarPage'), {
    fallback: <TextPlaceholder />
});

export default SubBarPage;
