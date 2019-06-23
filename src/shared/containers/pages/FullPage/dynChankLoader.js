import React from 'react';
import loadable from '@loadable/component';
import TextPlaceholder from 'shared/components/TextPlaceholder';

const DynamicChunk = loadable(() => import('shared/containers/pages/FullPage/dynamicChunk'), {
    fallback: <TextPlaceholder />
});

export default DynamicChunk;
