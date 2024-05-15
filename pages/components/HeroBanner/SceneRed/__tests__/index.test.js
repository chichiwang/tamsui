import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import SceneRed from '../index';

describe('HeroBanner - SceneRed', () => {
  test('matches snapshot', () => {
    const tree = renderer.create(<SceneRed />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
