/**
 * Entry point for dev server start
 */

import serverRenderer from './renderer';

export default ({ clientStats }) => serverRenderer({ clientStats, hot: true });
