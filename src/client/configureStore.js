/**
 * Client store creation file
 */

import { compose, createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createSagaMiddleware from 'redux-saga';

import createReducer, { commonReducersList } from 'shared/createReducer';
import globalSaga from 'shared/containers/App/saga';

export const history = createBrowserHistory();
export const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
    // we have to choose very carefully what reducers we want to persist
    // ! don't persist async reducers
    // ! don't persist common reducers which have some api-preloaded and rendered data it will cause react inconsistency warnings
    // it looks like a good idea to persist only some global state data i.e. auth status, locale etc.
    whitelist: ['global']
};

/**
 * Configure the store
 * @param  {Object} [preloadedState={}]   preloaded state from server
 * @return {Object} { store, persistor }
 */
export default function configureStore(preloadedState = {}) {
    // console.log('preloadedState: ', preloadedState);

    const filteredPreloadState = {};

    // we can't pass preloaded state data to async reducers because they will be injected later
    // so we have to filter async reducers data in order to prevent warning
    // we will fill them directly from __INITIAL__DATA__ on reducer init
    for (let i in preloadedState) {
        if (~commonReducersList.indexOf(i)) {
            filteredPreloadState[i] = preloadedState[i];
        }
    }

    const store = createStore(
        persistReducer(persistConfig, createReducer(false, {})(history)),
        filteredPreloadState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                sagaMiddleware,
            ),
        ),
    );

    // Async injectors
    store.runSaga = sagaMiddleware.run;
    store.asyncReducers = {};
    store.injectedSagas = {};

    store.injectReducer = (key, asyncReducer) => {
        store.asyncReducers[key] = asyncReducer;
        store.replaceReducer(persistReducer(persistConfig, createReducer(false, store.asyncReducers)(history)));
    };

    store.injectSaga = (key, saga, args) => {
        if (!store.injectedSagas[key] || store.injectedSagas[key] === 'done') {
            store.injectedSagas[key] = {
                task: store.runSaga(saga, args),
            };
        }
    };
    store.ejectSaga = (key) => {
        if (store.injectedSagas[key]) {
            store.injectedSagas[key].task.cancel();
            store.injectedSagas[key] = 'done';
        }
    };

    // if (module.hot) {
    //     module.hot.accept('shared/createReducer', () => {
    //         console.log('replace reducers');
    //         store.replaceReducer(persistReducer(persistConfig, createReducer(false, store.asyncReducers)(history)));
    //     });
    // }

    let persistor = persistStore(store);

    sagaMiddleware.run(globalSaga);

    return { store, persistor };
}
