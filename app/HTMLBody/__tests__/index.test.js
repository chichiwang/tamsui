import React from 'react';
import renderer from 'react-test-renderer';

import ManifestContext from 'app/contexts/ManifestContext';

import HTMLBody from '../index';

function ChildComponent() {
  return (
    <h1>Body Contents</h1>
  );
}

function MockedHead() {
  return (
    <head>
      <title>HTMLBody Test</title>
    </head>
  );
}

jest.mock('app/Head', () => MockedHead);

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
