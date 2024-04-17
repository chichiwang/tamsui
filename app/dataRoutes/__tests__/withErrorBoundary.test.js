import React from 'react';

import withErrorBoundary from '../withErrorBoundary';

function MockErrorPage() {
  return (
    <h1>Oops!</h1>
  );
}

jest.mock('pages/ErrorPage', () => MockErrorPage);

describe('withErrorBoundary', () => {
  test('applies errorElement to route object', () => {
    const routeObj = {};

    expect(withErrorBoundary(routeObj)).toEqual(expect.objectContaining({
      errorElement: <MockErrorPage />,
    }));
  });
});
