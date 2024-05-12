import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import HeroBanner from '../index';

describe('HeroBanner Component', () => {
  test('matches snapshot', () => {
    const tree = renderer.create(<HeroBanner />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
