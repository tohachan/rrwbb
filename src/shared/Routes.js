/**
 * Router file
 * Map routes to components
 * Note that we mostly map routes to loadable components
 */

import React from 'react';

import Main from 'shared/containers/pages/Main/loadable';
// Note that only Static component imported directly without loadable
import Static from 'shared/containers/pages/Static/Static';
import LoadablePage from 'shared/containers/pages/LoadablePage/loadable';
import FullPage from 'shared/containers/pages/FullPage/loadable';
/* route generator import anchor */
// don't remove ^ generator anchor above in order route generator to work

const NotFound = () => (
    <div>
        <h2>404 Page not found</h2>
    </div>
);

const Routes = [
    {
        path: '/',
        exact: true,
        component: Main
    },
    {
        path: '/static-page',
        component: Static,
    },
    {
        path: '/dynamic-page',
        component: LoadablePage,
    },
    {
        path: '/fullpage',
        component: FullPage,
    },
    /* route generator anchor */
    // don't remove ^ generator anchor above in order route generator to work
    {
        component: NotFound
    }
];

export default Routes;
