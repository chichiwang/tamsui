import React from 'react';
import { RouteObject } from 'react-router-dom';

import ErrorPage from 'pages/ErrorPage';

function withErrorBoundary(route: RouteObject): RouteObject {
  return {
    ...route,
    errorElement: <ErrorPage />,
  };
}

export default withErrorBoundary;
