/**
 * Server renderer
 * used in both dev and prod builds
 */

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet';

// Redux
import { Provider } from 'react-redux';
/**
 * Here we import reduxEnhancersAll from reduxEnhancersMap to tell server if
 * there is anything we should do before render the page
 * we don't pass this via Router to avoid client main bunle oversize
 */
import reduxEnhancersAll from 'shared/reduxEnhancersMap';

// Routes
import { matchRoutes } from 'react-router-config';
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
import { DEFAULT_LOCALE, LOCALE_TO_LANG } from 'shared/containers/ConnectedIntlProvider/constants';
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

/**
 * Rendeder function wrapper
 * @param  {Object} clientStats    Client stats. Comes in differrent formats depending on build type
 * @param  {Boolean} hot           See if it's run by hot server middlewares (i.e. Dev mode)
 * @return {Function}              Rendeder function
 */
export default ({ clientStats, hot }) => (req, res, next) => {
    const store = configureStore();
    let modules = [];
    let promise;
    let stylePromise;

    const extractorOptions = hot
        ? { stats: clientStats }
        : { statsFile: clientStats };

    const locale = req.query.locale || req.cookies.locale || DEFAULT_LOCALE;
    const lang = LOCALE_TO_LANG[locale] || 'en';
    const messages = translations[locale];

    const matchedRoutes = matchRoutes(Routes, req.url);
    const routeData = matchedRoutes.find(item => req.url === item.match.path) || {};
    const currentRoute = routeData ? routeData.route || {} : {};

    const asyncReducer = reduxEnhancersAll[currentRoute.path] ? reduxEnhancersAll[currentRoute.path]['asyncReducer'] : undefined;
    const dataLoaders = reduxEnhancersAll[currentRoute.path] ? reduxEnhancersAll[currentRoute.path]['dataLoaders'] : undefined;

    // inject acync reducer before making any api calls
    if (asyncReducer) {
        store.injectReducer(...asyncReducer);
    }

    // if there is any async data loaders passed we have to wait for them to finish first
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
                <html lang="${lang}">
                    <head>
                        ${helmet.title.toString()}
                        ${helmet.meta.toString()}
                        ${helmet.link.toString()}

                        ${styleTag}

                        <!-- Global site tag (gtag.js) - Google Analytics -->
                        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-215576548-1"></script>
                        <script>
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                        
                          gtag('config', 'UA-215576548-1');
                        </script>
                    </head>
                    <body>
                        <section class="hero is-fullheight" id="app">${component}</section>

                        <script>window.__INITIAL__DATA__ = ${JSON.stringify(initialState)}</script>
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
