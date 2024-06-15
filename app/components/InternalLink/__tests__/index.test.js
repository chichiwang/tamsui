import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import InternalLink from '../index';

function RouterWrappedLink(props) {
  return (
    <MemoryRouter>
      <InternalLink {...props} />
    </MemoryRouter>
  );
}

describe('InternalLink component', () => {
  test('matches the snapshot', () => {
    const tree = renderer.create(<RouterWrappedLink to="/test" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches the snapshot with existing state', () => {
    const tree = renderer.create(<RouterWrappedLink to="/test-state" state={{ unrelated: 'stateval' }} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
