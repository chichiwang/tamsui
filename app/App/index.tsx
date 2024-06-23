import React from 'react';
import { Manifest } from 'app/types';

import ManifestContext from 'app/context/ManifestContext';
import Head from 'app/Head';

import 'app/global.module.scss';

type AppProps = React.PropsWithChildren<{
  manifest: Manifest;
}>;

export default function App({ manifest, children }: AppProps): React.ReactElement {
  return (
    <React.StrictMode>
      <ManifestContext.Provider value={manifest}>
        <html lang="en">
          <Head />
          <body>
            { children }
          </body>
        </html>
      </ManifestContext.Provider>
    </React.StrictMode>
  );
}
