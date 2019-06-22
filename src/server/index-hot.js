import serverRenderer from './renderer';

export default ({ clientStats }) => serverRenderer({ clientStats, hot: true });
