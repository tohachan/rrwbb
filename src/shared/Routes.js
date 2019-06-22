import React from 'react';
import loadable from '@loadable/component';

import Main from 'shared/containers/pages/Main/loadable';
import Static from 'shared/containers/pages/Static/Static';
import LoadablePage from 'shared/containers/pages/LoadablePage/loadable';

import FullPage from 'shared/containers/pages/FullPage/loadable';

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
        component: NotFound
    }
];

export default Routes;
