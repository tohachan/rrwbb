import loadable from '@loadable/component';

const NoSsrChunk = loadable(() => import('./NoSsrChunk'), { ssr: false });

export default NoSsrChunk;
