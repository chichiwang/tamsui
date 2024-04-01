import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import cookies from 'js-cookie';

import { Manifest } from 'app/types';
import App from 'app/App';
import dataRoutes from 'app/dataRoutes';

const router = createBrowserRouter(dataRoutes);
const manifestCookie = cookies.get('manifest');

if (!manifestCookie) {
  throw new Error('[FATAL]: Manifest missing');
}

const manifest: Manifest = JSON.parse(manifestCookie);

hydrateRoot(
  document,
  <App manifest={manifest}>
    <RouterProvider router={router} />
  </App>,
);
