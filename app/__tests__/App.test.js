import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

jest.mock('../AppRoutes', function mockAppRoutes() {
  return function mockedAppRoutes() {
    return (
      <main>
        <h1>Totally Kickass Website</h1>
      </main>
    );
  };
});

describe('App Component', () => {
  test('matches snapshot', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
