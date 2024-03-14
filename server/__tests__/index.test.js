/* eslint global-require: 0 */
import express from 'express';
import { renderToPipeableStream } from 'react-dom/server';
import React from 'react';
import App from 'client/app';

jest.mock('express');
jest.mock('react-dom/server');

const mockAppGet = jest.fn();
const mockAppListen = jest.fn();
const mockAppUse = jest.fn();
const mockExpressApp = {
  get: mockAppGet,
  listen: mockAppListen,
  use: mockAppUse,
};

const mockResSend = jest.fn();
const mockResSocketOn = jest.fn();
const mockResSetHeader = jest.fn();
const mockRes = {
  send: mockResSend,
  socket: {
    on: mockResSocketOn,
  },
  setHeader: mockResSetHeader,
};

const mockPipe = jest.fn();

beforeAll(() => {
  express.mockImplementation(() => mockExpressApp);
  express.static.mockImplementation((arg) => arg);
  renderToPipeableStream.mockImplementation(() => ({ pipe: mockPipe }));
});

beforeEach(() => {
  jest.clearAllMocks();
  jest.isolateModules(() => {
    require('../index');
  });
  delete mockRes.statusCode;
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
  const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});

  callback();

  expect(mockConsoleLog).toHaveBeenCalledWith(expect.stringContaining('8080'));

  mockConsoleLog.mockRestore();
});

describe('static asset routes', () => {
  test('/scripts directory is served statically', () => {
    expect(express.static).toHaveBeenCalledWith(expect.stringMatching(/scripts$/));
    expect(mockAppUse).toHaveBeenCalledWith('/scripts', expect.stringMatching(/scripts$/));
  });
});

describe('app routes', () => {
  test('app.get routes root /', () => {
    expect(mockAppGet).toHaveBeenCalledTimes(1);
    expect(mockAppGet).toHaveBeenCalledWith('/', expect.any(Function));
  });

  test('callback logs an error when a socket error occurs', () => {
    const mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

    const appGetCallback = mockAppGet.mock.calls[0][1];
    appGetCallback({}, mockRes);

    expect(mockResSocketOn).toHaveBeenCalledWith('error', expect.any(Function));

    const resSocketOnCallback = mockResSocketOn.mock.calls[0][1];
    const mockErr = 'Totally legit error!';

    resSocketOnCallback(mockErr);

    expect(mockConsoleError).toHaveBeenCalledWith('Fatal:', mockErr);

    mockConsoleError.mockRestore();
  });

  test('renders React app to pipeable stream', () => {
    const appGetCallback = mockAppGet.mock.calls[0][1];
    appGetCallback({}, mockRes);

    expect(renderToPipeableStream).toHaveBeenCalledWith(
      expect.any(Object),
      expect.objectContaining({
        bootstrapScripts: expect.arrayContaining(['scripts/app.js']),
        onShellReady: expect.any(Function),
        onError: expect.any(Function),
      }),
    );

    const appComponent = renderToPipeableStream.mock.calls[0][0];
    const expectedComponent = <App />;

    expect(JSON.stringify(appComponent)).toEqual(JSON.stringify(expectedComponent));
  });

  test('onShellReady: sends the response with a 200 to the stream pipe', () => {
    const appGetCallback = mockAppGet.mock.calls[0][1];
    appGetCallback({}, mockRes);

    const { onShellReady } = renderToPipeableStream.mock.calls[0][1];
    onShellReady();

    expect(mockRes.statusCode).toBe(200);
    expect(mockResSetHeader).toHaveBeenCalledWith('content-type', 'text/html');
    expect(mockPipe).toHaveBeenCalledWith(mockRes);
  });

  test('onError: logs the error when handler is called', () => {
    const mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

    const appGetCallback = mockAppGet.mock.calls[0][1];
    appGetCallback({}, mockRes);

    const { onError } = renderToPipeableStream.mock.calls[0][1];
    const mockErr = 'App has exploded';
    onError(mockErr);

    expect(mockConsoleError).toHaveBeenCalledWith('Streaming failure:', mockErr);

    mockConsoleError.mockRestore();
  });

  test('onShellReady: sends the response with a 500 when error occurs', () => {
    const mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

    const appGetCallback = mockAppGet.mock.calls[0][1];
    appGetCallback({}, mockRes);

    const { onShellReady, onError } = renderToPipeableStream.mock.calls[0][1];
    const mockErr = 'App is an onion';
    onError(mockErr);
    onShellReady();

    expect(mockRes.statusCode).toBe(500);

    mockConsoleError.mockRestore();
  });
});
