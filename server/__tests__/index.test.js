import express from 'express';

jest.mock('express');

const mockAppGet = jest.fn();
const mockAppListen = jest.fn();
const mockExpressApp = {
  get: mockAppGet,
  listen: mockAppListen,
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

test('app.listen is invoked once', () => {
  expect(mockAppListen).toHaveBeenCalledTimes(1);
});

test('app.listen is called with port 8080', () => {
  expect(mockAppListen).toHaveBeenCalledWith(8080, expect.any(Function));
});
