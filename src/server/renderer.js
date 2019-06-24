import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet';

// Redux
import { Provider } from 'react-redux';
import reduxEnhancersAll from 'shared/reduxEnhancersMap';

// Routes
// import { matchRoutes } from 'react-router-config';
import { StaticRouter as Router, matchPath } from 'react-router-dom';
import Routes from 'shared/Routes';

// Store
import configureStore from './configureStore';
import { waitAll } from './helpers';
import { ChunkExtractor } from '@loadable/server';

// Components
import App from 'shared/containers/App';

// Set fetch for use inside saga
global.fetch = require('node-fetch');

// intl
import ConnectedIntlProvider from 'shared/containers/ConnectedIntlProvider';
import { changeMessages, setLocale } from 'shared/containers/ConnectedIntlProvider/actions';
import { DEFAULT_LOCALE } from 'shared/containers/ConnectedIntlProvider/constants';
import * as path from 'path';
import { glob } from 'glob';
import { readFileSync } from 'fs';

const translations = glob.sync('assets/intl/*.json')
    .map(filename => [
        path.basename(filename, '.json'),
        readFileSync(filename, 'utf8')
    ]).map(([locale, file]) => [locale, JSON.parse(file)]).reduce((collection, [locale, messages]) => {
        collection[locale] = messages;
        return collection;
    }, {});

export default ({ clientStats, hot }) => (req, res, next) => {
    const store = configureStore();
    let modules = [];
    let promise;
    let stylePromise;

    const extractorOptions = hot
        ? { stats: clientStats }
        : { statsFile: clientStats };

    const locale = req.query.locale || req.cookies.locale || DEFAULT_LOCALE;
    const messages = translations[locale];

    // We can get all matched routes if we need
    // const matchedRoutes = matchRoutes(Routes, req.url);
    // console.log('matchedRoutes: ', matchedRoutes);

    // But for start it's not always necessary
    const currentRoute = Routes.find(route => matchPath(req.url, route)) || {};

    const asyncReducer = reduxEnhancersAll[currentRoute.path] ? reduxEnhancersAll[currentRoute.path]['asyncReducer'] : undefined;
    const dataLoaders = reduxEnhancersAll[currentRoute.path] ? reduxEnhancersAll[currentRoute.path]['dataLoaders'] : undefined;

    // inject acync reducer before making any api calls
    if (asyncReducer) {
        store.injectReducer(...asyncReducer);
    }

    if (dataLoaders) {
        promise = store.runSaga(waitAll(dataLoaders)).toPromise();
    } else {
        promise = Promise.resolve(null);
    }

    const chunkExtractor = new ChunkExtractor(extractorOptions);

    promise.then(data => {
        const context = { data };

        // Set initial locale messages
        store.dispatch(setLocale(locale));
        store.dispatch(changeMessages({ [locale]: messages }));

        const component = ReactDOMServer.renderToString(chunkExtractor.collectChunks(
            <Provider store={store}>
                <ConnectedIntlProvider>
                    <Router location={req.url} context={context}>
                        <App />
                    </Router>
                </ConnectedIntlProvider>
            </Provider>
        ));

        // Disable css embedding for Dev server
        if (hot) {
            stylePromise = Promise.resolve(null);
        } else {
            stylePromise = chunkExtractor.getCssString();
        }

        const scriptTags = chunkExtractor.getScriptTags();

        stylePromise.then((cssString) => {
            const styleTag = hot
                ? chunkExtractor.getStyleTags()
                : ReactDOMServer.renderToString(
                    <style dangerouslySetInnerHTML={{
                        __html: cssString
                    }}/>
                );

            const initialState = store.getState();
            const helmet = Helmet.renderStatic();

            let html = `
                <!doctype html>
                <html lang="en">
                    <head>
                        ${helmet.title.toString()}
                        ${helmet.meta.toString()}
                        ${helmet.link.toString()}

                        ${styleTag}

                        <script>window.__INITIAL__DATA__ = ${JSON.stringify(initialState)}</script>
                    </head>
                    <body>
                        <section class="hero is-fullheight" id="app">${component}</section>
                        ${scriptTags}
                    </body>
                </html>`;

            if (context.url) {
                res.writeHead(301, {Location: context.url});
                res.end();
            } else {
                res.send(html);
            }
        });
    });
};
