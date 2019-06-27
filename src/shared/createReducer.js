/**
 * Creates combined reducer
 */

import { combineReducers } from 'redux';
import globalReducer from 'shared/containers/App/reducer';
import intlReducer from 'shared/containers/ConnectedIntlProvider/reducer';
import { connectRouter } from 'connected-react-router';

/**
 * list of sync global reducers
 * they will be always available and included in the main bundle
 */
const commonReducers = {
    global: globalReducer,
    i18n: intlReducer,
};

export const commonReducersList = Object.keys(commonReducers);

/**
 * Creates combined reducer
 * @param  {Boolean} isServer           See if it's running by server side
 * @param  {Object}  [asyncReducers={}] list of async reducers
 * @return {[type]}                     return combined reducer
 */
export default function createReducer(isServer, asyncReducers = {}) {
    if (isServer) {
        return combineReducers({
            ...commonReducers,
            ...asyncReducers
        });
    } else {
        return (history) => combineReducers({
            router: connectRouter(history),
            ...commonReducers,
            ...asyncReducers
        });
    }
}
