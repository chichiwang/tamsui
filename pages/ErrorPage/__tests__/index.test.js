import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ErrorPage from '../index';

describe('ErrorPage Component', () => {
  test('matches snapshot', () => {
    const tree = renderer.create(<ErrorPage />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('contains the error text', () => {
    render(<ErrorPage />);

    expect(screen.getByRole('heading')).toHaveTextContent('An Error Occurred!');
  });
});
