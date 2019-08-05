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
import SubPage from 'shared/containers/pages/SubPage/loadable';
import SubFooPage from 'shared/containers/pages/SubFooPage/loadable';
import SubBarPage from 'shared/containers/pages/SubBarPage/loadable';
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
    {
        path: '/sub',
        component: SubPage,
        routes: [
            {
                path: '/sub/foo',
                component: SubFooPage
            },
            {
                path: '/sub/bar',
                component: SubBarPage
            },
        ]
    },
    /* route generator anchor */
    // don't remove ^ generator anchor above in order route generator to work
    {
        component: NotFound
    }
];

export default Routes;
