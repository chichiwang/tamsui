import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';

import Home from 'app/Home';

export default function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
    </RouterRoutes>
  );
}
