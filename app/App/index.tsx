import React from 'react';
import { Manifest } from 'app/types';

import ManifestContext from 'app/contexts/ManifestContext';

import 'app/global.module.scss';

type AppProps = React.PropsWithChildren<{
  manifest: Manifest;
}>;

export default function App({ manifest, children }: AppProps): React.ReactElement {
  return (
    <React.StrictMode>
      <ManifestContext.Provider value={manifest}>
        { children }
      </ManifestContext.Provider>
    </React.StrictMode>
  );
}
