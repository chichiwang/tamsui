import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Layout from '../index';

function RouterWrappedLayout() {
  return (
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );
}

describe('Layout Component - default', () => {
  test('matches no-child snapshot', () => {
    const tree = renderer.create(<RouterWrappedLayout />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
