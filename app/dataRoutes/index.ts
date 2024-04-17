import { RouteObject } from 'react-router-dom';

import Home from 'pages/Home';
import Counter from 'pages/Counter';
import ErrorPage from 'pages/ErrorPage';
import NotFound from 'pages/NotFound';

import withErrorBoundary from './withErrorBoundary';

const dataRoutes: RouteObject[] = [
  withErrorBoundary({
    path: '/',
    Component: Home,
  }),
  withErrorBoundary({
    path: '/counter',
    Component: Counter,
  }),
  {
    path: '/error',
    Component: ErrorPage,
  },
  withErrorBoundary({
    path: '*',
    Component: NotFound,
  }),
];

export default dataRoutes;
