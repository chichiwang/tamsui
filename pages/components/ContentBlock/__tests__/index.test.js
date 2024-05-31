import React from 'react';
import renderer from 'react-test-renderer';

import ContentBlock from '../index';

describe('ContentBlock Component', () => {
  test('matches no-child snapshot', () => {
    const tree = renderer.create(
      <ContentBlock />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches child snapshot', () => {
    const tree = renderer.create(
      <ContentBlock>
        <p>Block content</p>
      </ContentBlock>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
