/* eslint global-require: 0 */
import express from 'express';

import logger from '../logger';
import httpLogger from '../httpLogger';
import appHandler from '../appHandler';

jest.mock('express');

jest.mock('../logger');
jest.mock('../httpLogger');
jest.mock('../appHandler', () => () => 'appHandler');

const mockAppGet = jest.fn();
const mockAppListen = jest.fn();
const mockAppUse = jest.fn();
const mockExpressApp = {
  get: mockAppGet,
  listen: mockAppListen,
  use: mockAppUse,
};

function mockExpressStatic(path) {
  return `Static Asset Directory: ${path}`;
}

describe('server', () => {
  beforeAll(() => {
    express.mockReturnValue(mockExpressApp);
    express.static.mockImplementation(mockExpressStatic);
  });

  beforeEach(() => {
    jest.clearAllMocks();
    jest.isolateModules(() => {
      require('../index');
    });
  });

  test('express is invoked once', () => {
    expect(express).toHaveBeenCalledTimes(1);
  });

  test('app.listen is invoked once', () => {
    expect(mockAppListen).toHaveBeenCalledTimes(1);
  });

  test('app.listen is called with port 8080', () => {
    expect(mockAppListen).toHaveBeenCalledWith(8080, expect.any(Function));
  });

  test('app.listen is passed a callback that logs out the port the app is listening on', () => {
    const callback = mockAppListen.mock.calls[0][1];
    callback();

    expect(logger.info).toHaveBeenCalledWith(expect.stringContaining('8080'));
  });

  describe('server middleware', () => {
    test('logger is passed to express as middleware', () => {
      expect(mockAppUse).toHaveBeenCalledWith(httpLogger);
    });
  });

  test('has the expected number of middleware and static asset routes', () => {
    expect(mockAppUse).toHaveBeenCalledTimes(4);
  });

  describe('static asset routes', () => {
    test('/scripts directory is served statically', () => {
      expect(express.static).toHaveBeenCalledWith(expect.stringMatching(/scripts$/));

      const scriptsPath = express.static.mock.calls[0][0];

      expect(mockAppUse).toHaveBeenCalledWith('/scripts', mockExpressStatic(scriptsPath));
    });

    test('/styles directory is served statically', () => {
      expect(express.static).toHaveBeenCalledWith(expect.stringMatching(/styles$/));

      const stylesPath = express.static.mock.calls[1][0];

      expect(mockAppUse).toHaveBeenCalledWith('/styles', mockExpressStatic(stylesPath));
    });

    test('/images directory is served statically', () => {
      expect(express.static).toHaveBeenCalledWith(expect.stringMatching(/images$/));

      const stylesPath = express.static.mock.calls[2][0];

      expect(mockAppUse).toHaveBeenCalledWith('/images', mockExpressStatic(stylesPath));
    });
  });

  describe('app routes', () => {
    test('registers appHandler to "*" routes', () => {
      expect(mockAppGet).toHaveBeenCalledTimes(1);
      expect(mockAppGet).toHaveBeenLastCalledWith('*', expect.any(Function));

      const lastCallIndex = mockAppGet.mock.calls.length - 1;
      const callbackHandler = mockAppGet.mock.calls[lastCallIndex][1];

      expect(callbackHandler).toEqual(appHandler);
    });
  });
});
