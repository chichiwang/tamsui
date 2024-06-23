import { createContext } from 'react';

import { Manifest } from 'app/types';

const ManifestContext = createContext<Manifest>({});

export default ManifestContext;
