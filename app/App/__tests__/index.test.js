import React from 'react';
import renderer from 'react-test-renderer';

import App from '../index';

jest.mock('app/Routes', function mockAppRoutes() {
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
