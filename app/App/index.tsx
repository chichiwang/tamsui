import React from 'react';
import 'app/global.module.scss';

import { Manifest } from 'app/types';

type AppProps = React.PropsWithChildren<{
  manifest: Manifest;
}>;

export default function App({ manifest, children }: AppProps): React.ReactElement {
  return (
    <React.StrictMode>
      <html lang="en">
        <head>
          <title>Tamsui</title>
          <link rel="stylesheet" type="text/css" href={`/${manifest['app.css']}`} />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/images/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/static/site.webmanifest" />
          <meta name="viewport" content="width=device-width" />
        </head>
        <body>
          { children }
        </body>
      </html>
    </React.StrictMode>
  );
}
