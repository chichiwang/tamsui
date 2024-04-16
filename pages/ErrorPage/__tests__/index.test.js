import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ErrorPage from '../index';

function RouterWrappedErrorPage() {
  return (
    <MemoryRouter>
      <ErrorPage />
    </MemoryRouter>
  );
}

describe('ErrorPage Component', () => {
  test('matches snapshot', () => {
    const tree = renderer.create(<RouterWrappedErrorPage />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('contains the error text', () => {
    render(<RouterWrappedErrorPage />);

    expect(screen.getByRole('heading')).toHaveTextContent('An Error Occurred!');
  });
});
