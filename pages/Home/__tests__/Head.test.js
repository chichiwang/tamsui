import React from 'react';
import renderer from 'react-test-renderer';

import Head from '../Head';

describe('Home/Head component', () => {
  beforeAll(() => {
    global.PROJECT_URL = 'https://home.head.test';
  });

  afterAll(() => {
    delete global.PROJECT_URL;
  });

  test('matches the snapshot', () => {
    const tree = renderer.create(<Head />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
