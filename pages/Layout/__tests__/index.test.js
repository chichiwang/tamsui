import React from 'react';
import renderer from 'react-test-renderer';

import Layout from '../index';

function ChildComponent() {
  return (
    <h1>Layout Child Component</h1>
  );
}

describe('Layout Component - default', () => {
  test('matches no-child snapshot', () => {
    const tree = renderer.create(<Layout />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches child snapshot', () => {
    const tree = renderer.create(
      <Layout>
        <ChildComponent />
      </Layout>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
