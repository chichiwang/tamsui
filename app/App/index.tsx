import React from 'react';
import { Manifest } from 'app/types';

import ManifestContext from 'app/context/ManifestContext';

import 'app/global.module.scss';

type AppProps = React.PropsWithChildren<{
  manifest: Manifest;
}>;

export default function App({ manifest, children }: AppProps): React.ReactElement {
  return (
    <React.StrictMode>
      <ManifestContext.Provider value={manifest}>
        <html lang="en">
          <head>
            <meta charSet="utf-8" />
            <title>Tamsui: A Universal JavaScript Application Boilerplate</title>
            <meta name="author" content="Chi-chi Wang" />
            <meta
              name="keywords"
              content="Tamsui, js, JavaScript, isomorphic, Node.js, React, TypeScript, Express, React-Router, Boilerplate"
            />
            <meta name="description" content="An Express/React universal application boilerplate" />
            <meta name="robots" content="all" />
            <meta name="viewport" content="width=device-width" />
            <link rel="stylesheet" type="text/css" href={`/${manifest['app.css']}`} />
            <link rel="apple-touch-icon" sizes="180x180" href="/static/images/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/static/site.webmanifest" />
          </head>
          <body>
            { children }
          </body>
        </html>
      </ManifestContext.Provider>
    </React.StrictMode>
  );
}
