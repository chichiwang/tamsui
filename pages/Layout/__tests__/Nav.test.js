import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Nav from '../Nav';

function RouterWrappedNav() {
  return (
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  );
}

describe('Layout/Nav Component', () => {
  test('matches snapshot', () => {
    const tree = renderer.create(<RouterWrappedNav />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('Logo and link home', () => {
    test('contains the project logo', () => {
      render(<RouterWrappedNav />);

      expect(screen.getByRole('img', { name: 'Tamsui logo' })).toBeInTheDocument();
    });

    test('contains the project name', () => {
      render(<RouterWrappedNav />);

      expect(screen.getByText('Tamsui')).toBeInTheDocument();
    });

    test('contains link to root route /', () => {
      render(<RouterWrappedNav />);

      expect(screen.getByRole('link', { name: 'Tamsui logo Tamsui' })).toHaveAttribute('href', '/');
    });
  });

  describe('Page Links', () => {
    test('contains a link to the Counter page', () => {
      render(<RouterWrappedNav />);

      expect(screen.getByText('Counter')).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Counter' })).toHaveAttribute('href', '/counter');
    });
  });

  describe('Social Links', () => {
    test('contains a Github logo', () => {
      render(<RouterWrappedNav />);

      expect(screen.getByRole('img', { name: 'Github logo' })).toBeInTheDocument();
    });

    test('contains link to the Github project', () => {
      render(<RouterWrappedNav />);

      expect(screen.getByRole('link', { name: 'Github logo' })).toHaveAttribute('href', 'https://github.com/chichiwang/tamsui');
      expect(screen.getByRole('link', { name: 'Github logo' })).toHaveAttribute('target', '_blank');
    });
  });
});
