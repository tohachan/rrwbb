import loadable from '@loadable/component';
import Placeholder from 'shared/containers/pages/FullPage/placeholder';

const NoSsrChunk = loadable(() => import('./NoSsrChunk'), { ssr: false });

export default NoSsrChunk;
