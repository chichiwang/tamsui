import React from 'react';

import Home from 'pages/Home';
import Counter from 'pages/Counter';
import ErrorPage from 'pages/ErrorPage';
import NotFound from 'pages/NotFound';

import dataRoutes from '../index';

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
  test('is an array of route objects', () => {
    expect(dataRoutes).toEqual(expect.any(Array));
    expect(dataRoutes.length).toBe(4);

    for (const route of dataRoutes) {
      expect(route).toEqual(expect.objectContaining({
        path: expect.any(String),
      }));
    }
  });

  describe('home route "/"', () => {
    const path = '/';
    const homeRoute = findRouteByPath(dataRoutes, path);

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
    const counterRoute = findRouteByPath(dataRoutes, path);

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
    const errorRoute = findRouteByPath(dataRoutes, path);

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
    const notFoundRoute = findRouteByPath(dataRoutes, path);

    test('is defined', () => {
      expect(notFoundRoute).not.toBe(undefined);
    });

    test('is the last route defined', () => {
      expect(dataRoutes[dataRoutes.length - 1]).toBe(notFoundRoute);
    });

    test('assigns the NotFound component', () => {
      expect(notFoundRoute).toEqual(expect.objectContaining({
        path,
        Component: NotFound,
      }));
    });
  });
});
