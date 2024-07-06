import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Nav from '../Nav';

jest.mock('app/components/Logo', function mockedLogo() {
  return function mockLogo() {
    return (
      <div data-testid="mock-logo" />
    );
  };
});

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
    test('renders the site logo', () => {
      render(<RouterWrappedNav />);

      expect(screen.getByTestId('mock-logo')).toBeInTheDocument();
    });

    test('contains the project name', () => {
      render(<RouterWrappedNav />);

      expect(screen.getByText('Tamsui')).toBeInTheDocument();
    });

    test('contains link to root route /', () => {
      render(<RouterWrappedNav />);

      expect(screen.getByRole('link', { name: 'Tamsui' })).toHaveAttribute('href', '/');
    });
  });

  describe('Page Links', () => {
    test('contains a link to the Documentation page', () => {
      render(<RouterWrappedNav />);

      expect(screen.getByText('Documentation')).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Documentation' })).toHaveAttribute('href', '/documentation');
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
    });
  });
});
