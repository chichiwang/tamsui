import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Counter from '../index';

function RouterWrappedCounter() {
  return (
    <MemoryRouter>
      <Counter />
    </MemoryRouter>
  );
}

describe('Counter Component', () => {
  test('matches snapshot', () => {
    const tree = renderer.create(<RouterWrappedCounter />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('contains the counter text', () => {
    render(<RouterWrappedCounter />);

    expect(screen.getByRole('heading')).toHaveTextContent('React Counter');
  });
});
