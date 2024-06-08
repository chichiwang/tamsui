import React from 'react';
import renderer from 'react-test-renderer';

import CopyIcon from '../index';

describe('CopyIcon component', () => {
  test('matches the snapshot', () => {
    const tree = renderer.create(<CopyIcon />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
