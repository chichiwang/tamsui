import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ErrorBoundary from '../index';

function FallbackComponent() {
  return (
    <h1>Fallback Rendered!</h1>
  );
}

function ComponentWithoutError() {
  return (
    <h1>Error Free Component</h1>
  );
}

const mockErr = new Error('The bed is full of poop');

function ComponentWithError() {
  if (Math.random() >= 0) {
    throw mockErr;
  }

  return (
    <h1>You never saw this</h1>
  );
}

let consoleErrorSpy;
let consoleWarnSpy;

describe('ErrorBoundary Component', () => {
  beforeAll(() => {
    consoleErrorSpy = jest.spyOn(console, 'error');
    consoleWarnSpy = jest.spyOn(console, 'warn');

    consoleErrorSpy.mockImplementation(() => {});
    consoleWarnSpy.mockImplementation(() => {});
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('renders children if no errors are thrown', () => {
    render(
      <ErrorBoundary fallback={<FallbackComponent />}>
        <ComponentWithoutError />
      </ErrorBoundary>,
    );

    expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
    expect(consoleWarnSpy).toHaveBeenCalledTimes(0);
    expect(screen.getByRole('heading')).toHaveTextContent('Error Free Component');
  });

  test('renders fallback component if errors are thrown', () => {
    render(
      <ErrorBoundary fallback={<FallbackComponent />}>
        <ComponentWithError />
      </ErrorBoundary>,
    );

    expect(consoleErrorSpy).toHaveBeenCalledWith(mockErr);
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('heading')).toHaveTextContent('Fallback Rendered!');
  });
});
