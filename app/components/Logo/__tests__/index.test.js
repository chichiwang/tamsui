import React from 'react';
import renderer from 'react-test-renderer';

import Logo from '../index';

describe('Logo component', () => {
  test('matches the no-props snapshot', () => {
    const tree = renderer.create(<Logo />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches the width prop snapshot', () => {
    const tree = renderer.create(<Logo width="55px" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches the height prop snapshot', () => {
    const tree = renderer.create(<Logo height="200%" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches the width and height props snapshot', () => {
    const tree = renderer.create(<Logo width="50rem" height="54rem" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches the className prop snapshot', () => {
    const tree = renderer.create(<Logo className="myLogoClass" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
