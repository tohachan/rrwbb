import React from 'react';
import loadable from '@loadable/component';
import TextPlaceholder from 'shared/components/TextPlaceholder';

const SubFooPage = loadable(() => import(/* webpackPreload: true */ './SubFooPage'), {
    fallback: <TextPlaceholder />
});

export default SubFooPage;
