import { RouteObject } from 'react-router-dom';

import Home from 'pages/Home';
import Counter from 'pages/Counter';
import ErrorPage from 'pages/ErrorPage';
import NotFound from 'pages/NotFound';

const dataRoutes: RouteObject[] = [{
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
}];

export default dataRoutes;
