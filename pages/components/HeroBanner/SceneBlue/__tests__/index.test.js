import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import SceneBlue from '../index';

describe('HeroBanner - SceneBlue', () => {
  test('matches snapshot', () => {
    const tree = renderer.create(<SceneBlue />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
