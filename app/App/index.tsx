import React from 'react';

import Routes from 'app/Routes';

export default function App(): React.ReactElement {
  return (
    <React.StrictMode>
      <html lang="en">
        <head>
          <title>Hello, React SSR!</title>
        </head>
        <body>
          <Routes />
        </body>
      </html>
    </React.StrictMode>
  );
}
