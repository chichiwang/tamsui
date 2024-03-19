import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '../Home';

describe('Home Component', () => {
  test('matches snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('contains the hello texta', () => {
    render(<Home />);

    expect(screen.getByRole('heading')).toHaveTextContent('Hello, React SSR!');
  });
});
