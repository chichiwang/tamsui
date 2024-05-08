import React from 'react';

import Layout from 'pages/Layout';

import Home from 'pages/Home';
import Counter from 'pages/Counter';
import ErrorPage from 'pages/ErrorPage';
import NotFound from 'pages/NotFound';

import dataRoutes from '../index';

function MockedLayout() {
  return (
    <h1>Layout</h1>
  );
}

function MockedHome() {
  return (
    <h1>Home Page</h1>
  );
}

function MockedCounter() {
  return (
    <h1>Counter Page</h1>
  );
}

function MockedNotFound() {
  return (
    <h1>NotFound Page</h1>
  );
}

function MockedErrorPage() {
  return (
    <h1>Error Page</h1>
  );
}

jest.mock('pages/Layout', function MockLayout() {
  return MockedLayout;
});
jest.mock('pages/Home', function MockHome() {
  return MockedHome;
});
jest.mock('pages/Counter', function MockCounter() {
  return MockedCounter;
});
jest.mock('pages/ErrorPage', function MockCounter() {
  return MockedErrorPage;
});
jest.mock('pages/NotFound', function MockNotFound() {
  return MockedNotFound;
});

function findRouteByPath(routes, path) {
  return routes.find(function matchRouteToPath(route) {
    return route.path === path;
  });
}

describe('dataRoutes', () => {
  const layoutRoute = dataRoutes[0];

  test('is an array of route objects', () => {
    expect(dataRoutes).toEqual(expect.any(Array));
    expect(dataRoutes.length).toBe(1);
  });

  describe('root Layout route', () => {
    test('nests the other routes', () => {
      expect(layoutRoute.children).toEqual(expect.any(Array));
      expect(layoutRoute.children.length).toBe(4);

      for (const route of layoutRoute.children) {
        expect(route).toEqual(expect.objectContaining({
          path: expect.any(String),
          Component: expect.any(Function),
        }));
      }
    });

    test('does not define a path', () => {
      expect(layoutRoute.path).toBe(undefined);
    });

    test('defines an error boundary', () => {
      expect(layoutRoute).toEqual(expect.objectContaining({
        errorElement: <MockedErrorPage />,
      }));
    });

    test('assigns the Layout component', () => {
      expect(layoutRoute).toEqual(expect.objectContaining({
        Component: Layout,
      }));
    });
  });

  describe('home route "/"', () => {
    const path = '/';
    const homeRoute = findRouteByPath(layoutRoute.children, path);

    test('is defined', () => {
      expect(homeRoute).not.toBe(undefined);
    });

    test('assigns the Home component', () => {
      expect(homeRoute).toEqual(expect.objectContaining({
        path,
        Component: Home,
      }));
    });
  });

  describe('counter route "/counter"', () => {
    const path = '/counter';
    const counterRoute = findRouteByPath(layoutRoute.children, path);

    test('is defined', () => {
      expect(counterRoute).not.toBe(undefined);
    });

    test('assigns the Counter component', () => {
      expect(counterRoute).toEqual(expect.objectContaining({
        path,
        Component: Counter,
      }));
    });
  });

  describe('error page route "/error"', () => {
    const path = '/error';
    const errorRoute = findRouteByPath(layoutRoute.children, path);

    test('is defined', () => {
      expect(errorRoute).not.toBe(undefined);
    });

    test('assigns the Counter component', () => {
      expect(errorRoute).toEqual(expect.objectContaining({
        path,
        Component: ErrorPage,
      }));
    });
  });

  describe('not-found route "*"', () => {
    const path = '*';
    const notFoundRoute = findRouteByPath(layoutRoute.children, path);

    test('is defined', () => {
      expect(notFoundRoute).not.toBe(undefined);
    });

    test('is the last route defined', () => {
      expect(layoutRoute.children[layoutRoute.children.length - 1]).toBe(notFoundRoute);
    });

    test('assigns the NotFound component', () => {
      expect(notFoundRoute).toEqual(expect.objectContaining({
        path,
        Component: NotFound,
      }));
    });
  });
});
