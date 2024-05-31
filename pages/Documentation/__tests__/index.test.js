import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Documentation from '../index';

function RouterWrappedDocumentation() {
  return (
    <MemoryRouter>
      <Documentation />
    </MemoryRouter>
  );
}

describe('Documentation Page Component', () => {
  test('matches snapshot', () => {
    const tree = renderer.create(<RouterWrappedDocumentation />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('contains an h1 tag with the page name', () => {
    render(<RouterWrappedDocumentation />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Developer Documentation');
  });
});
