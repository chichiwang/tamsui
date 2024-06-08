import React from 'react';
import renderer from 'react-test-renderer';

import LinkIcon from '../index';

describe('LinkIcon component', () => {
  test('matches the snapshot', () => {
    const tree = renderer.create(<LinkIcon />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
