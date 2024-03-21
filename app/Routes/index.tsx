import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';

import Home from 'pages/Home';
import Counter from 'pages/Counter';
import NotFound from 'pages/NotFound';

export default function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
}
