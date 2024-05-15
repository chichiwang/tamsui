import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import SceneOrange from '../index';

describe('HeroBanner - SceneOrange', () => {
  test('matches snapshot', () => {
    const tree = renderer.create(<SceneOrange />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
