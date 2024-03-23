import React from 'react';

import Home from 'pages/Home';
import Counter from 'pages/Counter';
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

jest.mock('pages/Home', function MockHome() {
  return MockedHome;
});
jest.mock('pages/Counter', function MockCounter() {
  return MockedCounter;
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

    for (const route of dataRoutes) {
      expect(route).toEqual(expect.objectContaining({
        path: expect.any(String),
      }));
    }
  });

  describe('home route "/"', () => {
    const path = '/';
    const homeRoute = findRouteByPath(dataRoutes, path);

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

    test('assigns the Counter component', () => {
      expect(counterRoute).toEqual(expect.objectContaining({
        path,
        Component: Counter,
      }));
    });
  });

  describe('not-found route "*"', () => {
    const path = '*';
    const notFoundRoute = findRouteByPath(dataRoutes, path);

    test('assigns the NotFound component', () => {
      expect(notFoundRoute).toEqual(expect.objectContaining({
        path,
        Component: NotFound,
      }));
    });
  });
});
