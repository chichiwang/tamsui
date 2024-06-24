import React from 'react';
import renderer from 'react-test-renderer';

import ManifestContext from 'app/context/ManifestContext';
import useRouteHead from 'app/hooks/useRouteHead';

import Head from '../index';

jest.mock('app/hooks/useRouteHead', () => jest.fn());

const mockedManifest = {
  'app.css': 'Head CSS filepath',
};

describe('Head component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('matches the no route head snapshot', () => {
    useRouteHead.mockReturnValueOnce({});

    const tree = renderer.create(
      <ManifestContext.Provider value={mockedManifest}>
        <Head />
      </ManifestContext.Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches the route title snapshot', () => {
    useRouteHead.mockReturnValueOnce({
      title: 'route has PageHandle with title',
    });

    const tree = renderer.create(
      <ManifestContext.Provider value={mockedManifest}>
        <Head />
      </ManifestContext.Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
