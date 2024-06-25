import React from 'react';
import renderer from 'react-test-renderer';

import ManifestContext from 'app/context/ManifestContext';
import useRouteHead from 'app/hooks/useRouteHead';

import Head from '../index';

jest.mock('app/hooks/useRouteHead', () => jest.fn());

const mockedManifest = {
  'app.css': 'Head CSS filepath',
};

function CustomHeadTags() {
  return (
    <>
      <meta property="fugazi" content="dootaloot doot" />
      <meta property="destiny" content="you're gonna to have to figure that out for yourself" />
    </>
  );
}

describe('Head component', () => {
  beforeAll(() => {
    global.PROJECT_URL = 'https://test.app.head';
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    delete global.PROJECT_URL;
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

  test('matches the route tags snapshot', () => {
    useRouteHead.mockReturnValueOnce({
      tags: <CustomHeadTags />,
    });

    const tree = renderer.create(
      <ManifestContext.Provider value={mockedManifest}>
        <Head />
      </ManifestContext.Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
