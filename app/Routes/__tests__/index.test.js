import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import Routes from '../index';

jest.mock('app/Home', function mockHome() {
  return function mockedHome() {
    return (
      <main>
        <h1>Home Route</h1>
      </main>
    );
  };
});

describe('Routes', () => {
  test('renders the Home Component at the root route', () => {
    render(<Routes />, { wrapper: BrowserRouter });

    expect(screen.getByText(/Home Route/)).toBeInTheDocument();
  });

  describe('/', () => {
    const path = '/';

    test('renders the Home Component', () => {
      render(
        <MemoryRouter initialEntries={[path]}>
          <Routes />
        </MemoryRouter>,
      );

      expect(screen.getByText(/Home Route/)).toBeInTheDocument();
    });
  });
});
