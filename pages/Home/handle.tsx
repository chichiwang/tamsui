import React from 'react';
import type { PageHandle } from 'app/types';

import Head from './Head';

const handle: PageHandle = {
  head: {
    tags: <Head />,
  },
};

export default handle;
