import { RouteObject } from 'react-router-dom';

import Layout from 'app/Layout';

import Home from 'pages/Home';
import Documentation from 'pages/Documentation';
import ErrorPage from 'pages/ErrorPage';
import NotFound from 'pages/NotFound';

import withErrorBoundary from './withErrorBoundary';

const dataRoutes: RouteObject[] = [
  withErrorBoundary({
    Component: Layout,
    children: [
      withErrorBoundary({
        path: '/',
        Component: Home,
      }),
      withErrorBoundary({
        path: '/documentation',
        Component: Documentation,
      }),
      withErrorBoundary({
        path: '/error',
        Component: ErrorPage,
      }),
      withErrorBoundary({
        path: '*',
        Component: NotFound,
      }),
    ],
  }),
];

export default dataRoutes;
