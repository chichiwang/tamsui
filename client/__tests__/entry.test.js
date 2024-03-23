/* eslint-disable react/prop-types, global-require */
import React from 'react';
import renderer from 'react-test-renderer';
import { hydrateRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const mockedDataRoutes = [{
  path: '/',
  component: 'Home Page Component',
}];

function MockedApp({ children }) {
  return (
    <div>
      { children }
    </div>
  );
}

function MockedRouterProvider({ router }) {
  return (
    <h1>{ router }</h1>
  );
}

const mockedRouterValue = '<Browser Router>';

jest.mock('react-dom/client');
jest.mock('react-router-dom');
jest.mock('app/dataRoutes', function mockDataRoutes() {
  return mockedDataRoutes;
});
jest.mock('app/App', function mockApp() {
  return MockedApp;
});

describe('client/entry', () => {
  beforeAll(() => {
    createBrowserRouter.mockReturnValue(mockedRouterValue);
    RouterProvider.mockImplementation(MockedRouterProvider);
    require('../entry');
  });

  test('creates a browser router using data routes', () => {
    expect(createBrowserRouter).toHaveBeenCalledWith(mockedDataRoutes);
  });

  test('calls hydrateRoot with the correct arguments', () => {
    expect(hydrateRoot).toHaveBeenCalledWith(document, expect.any(Object));
  });

  test('composes the RouterProvider into the App', () => {
    const hydrateArgument = hydrateRoot.mock.calls[0][1];
    const tree = renderer.create(hydrateArgument).toJSON();
    const expectedTree = renderer.create(
      <MockedApp>
        <MockedRouterProvider router={mockedRouterValue} />
      </MockedApp>,
    ).toJSON();

    expect(tree).toEqual(expectedTree);
  });
});
