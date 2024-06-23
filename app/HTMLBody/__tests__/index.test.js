import React from 'react';
import renderer from 'react-test-renderer';

import ManifestContext from 'app/context/ManifestContext';

import HTMLBody from '../index';

function ChildComponent() {
  return (
    <h1>Body Contents</h1>
  );
}

const mockedManifest = {
  'app.css': 'HTML Body CSS path',
};

describe('HTMLBody Component', () => {
  test('matches no-child snapshot', () => {
    const tree = renderer.create(
      <ManifestContext.Provider value={mockedManifest}>
        <HTMLBody />
      </ManifestContext.Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches child snapshot', () => {
    const tree = renderer.create(
      <ManifestContext.Provider value={mockedManifest}>
        <HTMLBody>
          <ChildComponent />
        </HTMLBody>
      </ManifestContext.Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
