/* eslint global-require: 0 */
import express from 'express';
import pino from 'pino-http';
import appHandler from '../appHandler';

jest.mock('express');
jest.mock('pino-http');
jest.mock('../appHandler');

const mockAppGet = jest.fn();
const mockAppListen = jest.fn();
const mockAppUse = jest.fn();
const mockExpressApp = {
  get: mockAppGet,
  listen: mockAppListen,
  use: mockAppUse,
};

const mockLogger = 'Finest logger in the business';

function mockExpressStatic(path) {
  return `Static Asset Directory: ${path}`;
}

let mockConsoleLog;

describe('server', () => {
  beforeAll(() => {
    express.mockReturnValue(mockExpressApp);
    express.static.mockImplementation(mockExpressStatic);
    pino.mockReturnValue(mockLogger);
  });

  beforeEach(() => {
    mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});

    jest.clearAllMocks();
    jest.isolateModules(() => {
      require('../index');
    });
  });

  afterEach(() => {
    mockConsoleLog.mockRestore();
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

    expect(mockConsoleLog).toHaveBeenCalledWith(expect.stringContaining('8080'));
  });

  describe('server middleware', () => {
    test('pino-http is invoked to create a logger', () => {
      expect(pino).toHaveBeenCalledTimes(1);
    });

    test('logger is passed to express as middleware', () => {
      expect(mockAppUse).toHaveBeenCalledWith(mockLogger);
    });
  });

  test('has the expected number of middleware and static asset routes', () => {
    expect(mockAppUse).toHaveBeenCalledTimes(3);
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
