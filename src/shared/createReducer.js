import { combineReducers } from 'redux';
import globalReducer from 'shared/containers/App/reducer';
import intlReducer from 'shared/containers/ConnectedIntlProvider/reducer';
import { connectRouter } from 'connected-react-router';

const commonReducers = {
    global: globalReducer,
    i18n: intlReducer,
};

export const commonReducersList = Object.keys(commonReducers);

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
