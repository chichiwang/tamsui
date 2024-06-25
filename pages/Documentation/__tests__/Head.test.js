import React from 'react';
import renderer from 'react-test-renderer';

import Head from '../Head';

describe('Documentation/Head component', () => {
  beforeAll(() => {
    global.PROJECT_URL = 'https://documentation.head.test';
  });

  afterAll(() => {
    delete global.PROJECT_URL;
  });

  test('matches the snapshot', () => {
    const tree = renderer.create(<Head />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
