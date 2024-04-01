import { readFileSync } from 'node:fs';
import path from 'node:path';

import { Manifest } from 'app/types';

const manifestFilePath = path.resolve(__dirname, 'manifest.json');

const manifestFileContents = readFileSync(manifestFilePath, {
  encoding: 'utf-8',
});

const manifest: Manifest = JSON.parse(manifestFileContents);

export default manifest;
