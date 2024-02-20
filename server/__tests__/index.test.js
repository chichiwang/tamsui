import express from 'express';

jest.mock('express');

const mockAppGet = jest.fn();
const mockAppListen = jest.fn();
const mockExpressApp = {
  get: mockAppGet,
  listen: mockAppListen,
};

const mockResSend = jest.fn();
const mockRes = {
  send: mockResSend,
};

beforeAll(() => {
  express.mockImplementation(() => mockExpressApp);
});

beforeEach(() => {
  jest.clearAllMocks();
  jest.isolateModules(() => {
    require('../index.mjs');
  });
});

test('express is invoked once', () => {
  expect(express).toHaveBeenCalledTimes(1);
});

test('app.get routes root /', () => {
  expect(mockAppGet).toHaveBeenCalledTimes(1);
  expect(mockAppGet).toHaveBeenCalledWith('/', expect.any(Function));
});

test('app.get is passed a callback that sends a string', () => {
  const callback = mockAppGet.mock.calls[0][1];

  callback({}, mockRes);

  expect(mockResSend).toHaveBeenCalledTimes(1);
  expect(mockResSend).toHaveBeenCalledWith(expect.any(String));
});

test('app.listen is invoked once', () => {
  expect(mockAppListen).toHaveBeenCalledTimes(1);
});

test('app.listen is called with port 8080', () => {
  expect(mockAppListen).toHaveBeenCalledWith(8080, expect.any(Function));
});

test('app.listen is passed a callback that logs out the port the app is listening on', () => {
  const callback = mockAppListen.mock.calls[0][1];
  const mockConsoleLog = jest.spyOn(console, 'log');

  callback();

  expect(mockConsoleLog).toHaveBeenCalledWith(expect.stringContaining('8080'));

  mockConsoleLog.mockRestore();
});
