/**
 * Entry for SPA client
 *
 * doesn't use hydrate and loadableReady since we are not suppose to have any server here
 */

import React from 'react';
import ReactDOM from 'react-dom';

import 'whatwg-fetch';

// Polyfill for safari
import 'intersection-observer';

import App from 'shared/containers/App';
import { BrowserRouter as Router } from 'react-router-dom';

// redux
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// connect router
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './configureStore';

// persist
// import { PersistGate } from 'redux-persist/integration/react';

// intl
import ConnectedIntlProvider from 'shared/containers/ConnectedIntlProvider';

import * as envConfig from '../../config/env';

import './app.scss';

const state = window.__INITIAL__DATA__;

const { store, persistor } = configureStore(state);

if (envConfig.useOfflinePlugin) {
    require('offline-plugin/runtime').install();
}

ReactDOM.render(
    <Provider store={store}>
        <ConnectedIntlProvider>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </ConnectedIntlProvider>
    </Provider>, document.getElementById('app')
);
