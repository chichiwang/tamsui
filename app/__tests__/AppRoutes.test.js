import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import AppRoutes from '../AppRoutes';

jest.mock('../Home', function mockHome() {
  return function mockedHome() {
    return (
      <main>
        <h1>Home Route</h1>
      </main>
    );
  };
});

describe('AppRoutes', () => {
  test('renders the Home Component at the root route', () => {
    render(<AppRoutes />, { wrapper: BrowserRouter });

    expect(screen.getByText(/Home Route/)).toBeInTheDocument();
  });

  describe('/', () => {
    const path = '/';

    test('renders the Home Component', () => {
      render(
        <MemoryRouter initialEntries={[path]}>
          <AppRoutes />
        </MemoryRouter>,
      );

      expect(screen.getByText(/Home Route/)).toBeInTheDocument();
    });
  });
});
