/* eslint global-require: 0, camelcase: 0 */
import express from 'express';
import serveStatic from 'serve-static';

import logger from '../logger';
import httpLogger from '../httpLogger';
import appHandler from '../appHandler';

jest.mock('express');
jest.mock('serve-static', () => jest.fn((p) => p));

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

const mockedPORT = 8080;
const mockedSERVE_STATIC = true;

describe('server', () => {
  beforeAll(() => {
    express.mockReturnValue(mockExpressApp);
    express.static.mockImplementation(mockExpressStatic);
    global.PORT = mockedPORT;
    global.SERVE_STATIC = mockedSERVE_STATIC;
  });

  beforeEach(() => {
    jest.clearAllMocks();
    jest.isolateModules(() => {
      require('../index');
    });
  });

  afterAll(() => {
    delete global.PORT;
    delete global.SERVE_STATIC;
  });

  test('express is invoked once', () => {
    expect(express).toHaveBeenCalledTimes(1);
  });

  test('app.listen is invoked once', () => {
    expect(mockAppListen).toHaveBeenCalledTimes(1);
  });

  test('app.listen is called with port value', () => {
    expect(mockAppListen).toHaveBeenCalledWith(mockedPORT, expect.any(Function));
  });

  test('app.listen is passed a callback that logs out the port the app is listening on', () => {
    const callback = mockAppListen.mock.calls[0][1];
    callback();

    expect(logger.info).toHaveBeenCalledWith(expect.stringContaining(`${mockedPORT}`));
  });

  describe('assigns PORT value from config', () => {
    const altPORT = 8888;

    beforeAll(() => {
      global.PORT = altPORT;
    });

    afterAll(() => {
      global.PORT = mockedPORT;
    });

    test('app.listen is called with the config PORT value', () => {
      expect(mockAppListen).toHaveBeenCalledWith(altPORT, expect.any(Function));

      const callback = mockAppListen.mock.calls[0][1];
      callback();

      expect(logger.info).toHaveBeenCalledWith(expect.stringContaining(`${altPORT}`));
    });
  });

  describe('server middleware', () => {
    test('logger is passed to express as middleware', () => {
      expect(mockAppUse).toHaveBeenCalledWith(httpLogger);
    });
  });

  describe('SERVE_STATIC config set to true', () => {
    test('has the expected number of middleware and static asset routes', () => {
      expect(mockAppUse).toHaveBeenCalledTimes(5);
    });

    test('serves the correct number of static routes', () => {
      expect(express.static).toHaveBeenCalledTimes(3);
    });

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

    test('/static directory is served statically', () => {
      expect(express.static).toHaveBeenCalledWith(expect.stringMatching(/static/));

      const staticPath = express.static.mock.calls[2][0];

      expect(mockAppUse).toHaveBeenCalledWith('/static', mockExpressStatic(staticPath));
    });
  });

  describe('SERVE_STATIC config set to false', () => {
    const altSERVE_STATIC = false;

    beforeAll(() => {
      global.SERVE_STATIC = altSERVE_STATIC;
    });

    afterAll(() => {
      global.SERVE_STATIC = mockedSERVE_STATIC;
    });

    test('has the expected number of middleware and static asset routes', () => {
      expect(mockAppUse).toHaveBeenCalledTimes(2);
    });

    test('does not register any static route', () => {
      expect(express.static).not.toHaveBeenCalled();
    });

    test('/static directory is served statically', () => {
      expect(serveStatic).toHaveBeenCalledWith(expect.stringMatching(/static/));

      const staticPath = serveStatic.mock.calls[0][0];

      expect(mockAppUse).toHaveBeenCalledWith(staticPath);
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
