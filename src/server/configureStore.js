import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from 'shared/createReducer';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(createReducer(true), {}, applyMiddleware(sagaMiddleware));

    store.runSaga = sagaMiddleware.run;

    // Add a dictionary to keep track of the registered async reducers and sagas
    store.asyncReducers = {};
    store.injectedSagas = {};

    // Create an inject reducer function
    // This function adds the async reducer, and creates a new combined reducer
    store.injectReducer = (key, asyncReducer) => {
        store.asyncReducers[key] = asyncReducer;
        store.replaceReducer(createReducer(true, store.asyncReducers));
    };

    // We don't need server to actually inject and run any client saga
    // since we do data preload by direct loaders calls
    // so just leave dummy functions here
    store.injectSaga = (key, saga, args) => {};
    store.ejectSaga = (key) => {};

    return store;
}
