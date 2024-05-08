import { RouteObject } from 'react-router-dom';

import Layout from 'pages/Layout';

import Home from 'pages/Home';
import Counter from 'pages/Counter';
import ErrorPage from 'pages/ErrorPage';
import NotFound from 'pages/NotFound';

import withErrorBoundary from './withErrorBoundary';

const dataRoutes: RouteObject[] = [
  withErrorBoundary({
    Component: Layout,
    children: [{
      path: '/',
      Component: Home,
    }, {
      path: '/counter',
      Component: Counter,
    }, {
      path: '/error',
      Component: ErrorPage,
    }, {
      path: '*',
      Component: NotFound,
    }],
  }),
];

export default dataRoutes;
