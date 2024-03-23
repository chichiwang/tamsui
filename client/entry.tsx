import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import App from 'app/App';
import dataRoutes from 'app/dataRoutes';

const router = createBrowserRouter(dataRoutes);

hydrateRoot(
  document,
  <App>
    <RouterProvider router={router} />
  </App>,
);
