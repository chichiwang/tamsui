import React from 'react';

import AppRoutes from './AppRoutes';

export default function App(): React.ReactElement {
  return (
    <React.StrictMode>
      <html lang="en">
        <head>
          <title>Hello, React SSR!</title>
        </head>
        <body>
          <AppRoutes />
        </body>
      </html>
    </React.StrictMode>
  );
}
