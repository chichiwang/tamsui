import React from 'react';
import renderer from 'react-test-renderer';

import AnimatedLogo from '../AnimatedLogo';

describe('AnimatedLogo component', () => {
  test('matches the no-props snapshot', () => {
    const tree = renderer.create(<AnimatedLogo />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches the width prop snapshot', () => {
    const tree = renderer.create(<AnimatedLogo width="55px" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches the height prop snapshot', () => {
    const tree = renderer.create(<AnimatedLogo height="200%" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches the width and height props snapshot', () => {
    const tree = renderer.create(<AnimatedLogo width="50rem" height="54rem" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches the className prop snapshot', () => {
    const tree = renderer.create(<AnimatedLogo className="myLogoClass" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
