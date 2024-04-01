/* eslint-disable react/prop-types, global-require */
import React from 'react';
import renderer from 'react-test-renderer';
import { hydrateRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import cookies from 'js-cookie';

const mockedDataRoutes = [{
  path: '/',
  component: 'Home Page Component',
}];

function MockedApp({ manifest, children }) {
  return (
    <div>
      { children }
      { JSON.stringify(manifest) }
    </div>
  );
}

function MockedRouterProvider({ router }) {
  return (
    <h1>{ router }</h1>
  );
}

const mockedRouterValue = '<Browser Router>';
const mockedManifest = JSON.stringify({
  destiny: 'go west',
});

jest.mock('react-dom/client');
jest.mock('react-router-dom');
jest.mock('js-cookie');
jest.mock('app/dataRoutes', function mockDataRoutes() {
  return mockedDataRoutes;
});
jest.mock('app/App', function mockApp() {
  return MockedApp;
});

describe('client/entry', () => {
  describe('manifest cookie is set', () => {
    beforeAll(() => {
      createBrowserRouter.mockReturnValue(mockedRouterValue);
      RouterProvider.mockImplementation(MockedRouterProvider);
      cookies.get.mockReturnValue(mockedManifest);
      jest.isolateModules(() => {
        require('../entry');
      });
    });

    test('creates a browser router using data routes', () => {
      expect(createBrowserRouter).toHaveBeenCalledWith(mockedDataRoutes);
    });

    test('calls hydrateRoot with the correct arguments', () => {
      expect(hydrateRoot).toHaveBeenCalledWith(document, expect.any(Object));
    });

    test('reads the manifest from cookies', () => {
      expect(cookies.get).toHaveBeenCalledWith('manifest');
    });

    test('composes the RouterProvider into the App', () => {
      const hydrateArgument = hydrateRoot.mock.calls[0][1];
      const tree = renderer.create(hydrateArgument).toJSON();
      const expectedTree = renderer.create(
        <MockedApp manifest={JSON.parse(mockedManifest)}>
          <MockedRouterProvider router={mockedRouterValue} />
        </MockedApp>,
      ).toJSON();

      expect(tree).toEqual(expectedTree);
    });
  });

  describe('manifest cookie is not set', () => {
    beforeAll(() => {
      cookies.get.mockReturnValue(undefined);
    });

    test('throws an error', () => {
      expect(() => {
        jest.isolateModules(() => {
          require('../entry');
        });
      }).toThrow();
    });
  });
});
