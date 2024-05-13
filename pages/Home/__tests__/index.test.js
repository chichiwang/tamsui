import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '../index';

function RouterWrappedHome() {
  return (
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
}

describe('Home Component', () => {
  test('matches snapshot', () => {
    const tree = renderer.create(<RouterWrappedHome />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('contains an h1 tag with the project name', () => {
    render(<RouterWrappedHome />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Tamsui');
  });
});
