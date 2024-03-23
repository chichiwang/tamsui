import React from 'react';
import renderer from 'react-test-renderer';

import App from '../index';

function ChildComponent() {
  return (
    <h1>App Child Component</h1>
  );
}

describe('App Component', () => {
  test('matches no-child snapshot', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('matches child snapshot', () => {
    const tree = renderer.create(
      <App>
        <ChildComponent />
      </App>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
