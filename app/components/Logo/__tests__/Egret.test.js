import React from 'react';
import renderer from 'react-test-renderer';

import Egret from '../Egret';

describe('Egret component', () => {
  test('no props - matches snapshot', () => {
    const tree = renderer.create(<Egret />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('color passed - matches snapshot', () => {
    const colorRedTree = renderer.create(<Egret color="#ff1000" />).toJSON();
    const colorBlackTree = renderer.create(<Egret color="#000" />).toJSON();

    expect(colorRedTree).toMatchSnapshot();
    expect(colorBlackTree).toMatchSnapshot();
  });

  test('width passed - matches snapshot', () => {
    const widthPxTree = renderer.create(<Egret width="101px" />).toJSON();
    const widthPercentTree = renderer.create(<Egret width="45%" />).toJSON();

    expect(widthPxTree).toMatchSnapshot();
    expect(widthPercentTree).toMatchSnapshot();
  });

  test('height passed - matches snapshot', () => {
    const heightPxTree = renderer.create(<Egret height="42px" />).toJSON();
    const heightPercentTree = renderer.create(<Egret height="66%" />).toJSON();

    expect(heightPxTree).toMatchSnapshot();
    expect(heightPercentTree).toMatchSnapshot();
  });
});
