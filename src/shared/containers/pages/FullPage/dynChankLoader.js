import loadable from '@loadable/component';
import Placeholder from 'shared/containers/pages/FullPage/placeholder';

const DynamicChunk = loadable(() => import('shared/containers/pages/FullPage/DynamicChunk'));

export default DynamicChunk;
