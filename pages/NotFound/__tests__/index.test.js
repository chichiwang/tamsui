import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import NotFound from '../index';

function RouterWrappedNotFound() {
  return (
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );
}

describe('NotFound Component', () => {
  test('matches snapshot', () => {
    const tree = renderer.create(<RouterWrappedNotFound />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('contains the hello text', () => {
    render(<RouterWrappedNotFound />);

    expect(screen.getByRole('heading')).toHaveTextContent('Page Not Found!');
  });
});
