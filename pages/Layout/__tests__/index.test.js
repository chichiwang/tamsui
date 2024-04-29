import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Layout from '../index';

function RouterWrappedLayout({ children }) {
  return (
    <MemoryRouter>
      <Layout>
        { children }
      </Layout>
    </MemoryRouter>
  );
}

function ChildComponent() {
  return (
    <h1>Layout Child Component</h1>
  );
}

describe('Layout Component - default', () => {
  test('matches no-child snapshot', () => {
    const tree = renderer.create(<RouterWrappedLayout />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches child snapshot', () => {
    const tree = renderer.create(
      <RouterWrappedLayout>
        <ChildComponent />
      </RouterWrappedLayout>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
