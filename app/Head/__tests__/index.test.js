import React from 'react';
import renderer from 'react-test-renderer';

import ManifestContext from 'app/context/ManifestContext';

import Head from '../index';

const mockedManifest = {
  'app.css': 'Head CSS filepath',
};

describe('Head component', () => {
  test('matches the snapshot', () => {
    const tree = renderer.create(
      <ManifestContext.Provider value={mockedManifest}>
        <Head />
      </ManifestContext.Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
