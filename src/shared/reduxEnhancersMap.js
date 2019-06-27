/**
 * Map async reducers and saga requests to server
 *
 * This file will be included only by server, so we can avoid inclusion of every
 * used reducer/saga into the main client bundle
 */

import { asyncReduxEnhancers as fullpage } from 'shared/containers/pages/FullPage/FullPage';

export default {
    '/fullpage': fullpage
};
