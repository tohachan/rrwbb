import loadable from '@loadable/component';
import Placeholder from 'shared/containers/pages/FullPage/placeholder';

const DynamicChunk = loadable(() => import('./DynamicChunk'));

export default DynamicChunk;
