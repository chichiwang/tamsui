import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import SceneMaroon from '../index';

describe('HeroBanner - SceneMaroon', () => {
  test('matches snapshot', () => {
    const tree = renderer.create(<SceneMaroon />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
