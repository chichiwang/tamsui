import React from 'react';
import renderer from 'react-test-renderer';

import App from '../index';

describe('App Component', () => {
  test('matches snapshot', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
