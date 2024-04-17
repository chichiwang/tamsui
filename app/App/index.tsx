import React from 'react';
import 'app/global.module.scss';

import { Manifest } from 'app/types';

import ErrorBoundary from 'app/ErrorBoundary';
import ErrorPage from 'pages/ErrorPage';

type AppProps = React.PropsWithChildren<{
  manifest: Manifest;
}>;

export default function App({ manifest, children }: AppProps): React.ReactElement {
  return (
    <React.StrictMode>
      <html lang="en">
        <head>
          <title>Hello, React SSR!</title>
          <link rel="stylesheet" type="text/css" href={`/${manifest['app.css']}`} />
        </head>
        <body>
          <ErrorBoundary fallback={<ErrorPage />}>
            { children }
          </ErrorBoundary>
        </body>
      </html>
    </React.StrictMode>
  );
}
