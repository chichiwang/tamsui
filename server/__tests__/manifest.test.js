/* eslint-disable global-require */
import { readFileSync } from 'node:fs';

jest.mock('node:fs');

const mockedManifest = {
  'app.js': 'tenacious.d.js',
};

describe('manifest', () => {
  let manifest;

  beforeAll(() => {
    readFileSync.mockReturnValue(JSON.stringify(mockedManifest));
  });

  beforeEach(() => {
    jest.isolateModules(() => {
      manifest = require('../manifest').default;
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    manifest = undefined;
  });

  test('reads manifest.json', () => {
    expect(readFileSync).toHaveBeenCalledTimes(1);
    expect(readFileSync).toHaveBeenCalledWith(
      expect.stringMatching(/manifest.json$/),
      expect.objectContaining({
        encoding: 'utf-8',
      }),
    );
  });

  test('exports parsed JSON from the file', () => {
    expect(manifest).toEqual(mockedManifest);
  });
});
