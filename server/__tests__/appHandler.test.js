/* eslint-disable global-require */
import React from 'react';
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router-dom/server';
import { renderToPipeableStream } from 'react-dom/server';

import App from 'app/App';
import dataRoutes from 'app/dataRoutes';
import createFetchRequest from '../createFetchRequest';

jest.mock('react-router-dom/server');
jest.mock('react-dom/server');
jest.mock('../createFetchRequest');

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

const mockReq = {
  url: '/sfw',
  get: jest.fn(),
};

const mockedContext = {
  statusCode: 8000000,
  matches: [{
    route: {
      path: 'of the righteous',
    },
  }],
};
const mockedHandler = {
  query: jest.fn(() => Promise.resolve(mockedContext)),
  dataRoutes: 'fugazi data routes',
};

const mockedStaticRouter = 'Buzz Buzz';
const mockedFetchRequest = 'Severus, please fetch me the strongest truth potion you posess';

const mockPipe = jest.fn();
let mockConsoleErr;
let appHandler;

describe('appHandler', () => {
  beforeAll(() => {
    createFetchRequest.mockReturnValue(mockedFetchRequest);
    createStaticHandler.mockReturnValue(mockedHandler);
    createStaticRouter.mockReturnValue(mockedStaticRouter);
    renderToPipeableStream.mockReturnValue({ pipe: mockPipe });
  });

  beforeEach(() => {
    mockConsoleErr = jest.spyOn(console, 'error').mockImplementation(() => {});

    delete mockRes.statusCode;

    jest.isolateModules(() => {
      appHandler = require('../appHandler').default;
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    mockConsoleErr.mockRestore();
  });

  test('creates a static handler', () => {
    expect(createStaticHandler).toHaveBeenCalledTimes(1);

    const param = createStaticHandler.mock.calls[0][0];

    expect(JSON.stringify(param)).toBe(JSON.stringify(dataRoutes));
  });

  test('logs an error when a socket error occurs', async () => {
    await appHandler(mockReq, mockRes);

    expect(mockResSocketOn).toHaveBeenCalledWith('error', expect.any(Function));

    const resSocketOnCallback = mockResSocketOn.mock.calls[0][1];
    const mockErr = 'Totally legit error!';

    resSocketOnCallback(mockErr);

    expect(mockConsoleErr).toHaveBeenCalledWith('Fatal:', mockErr);
  });

  test('creates a static router', async () => {
    await appHandler(mockReq, mockRes);

    expect(createStaticRouter).toHaveBeenCalledTimes(1);
    expect(createStaticRouter).toHaveBeenCalledWith(mockedHandler.dataRoutes, mockedContext);
  });

  test('renders React app to pipeable stream', async () => {
    await appHandler(mockReq, mockRes);

    expect(renderToPipeableStream).toHaveBeenCalledTimes(1);
    expect(renderToPipeableStream).toHaveBeenCalledWith(
      expect.any(Object),
      expect.objectContaining({
        bootstrapScripts: expect.arrayContaining(['/scripts/app.js']),
        onShellReady: expect.any(Function),
        onError: expect.any(Function),
      }),
    );

    const appComponent = renderToPipeableStream.mock.calls[0][0];
    const expectedComponent = (
      <App>
        <StaticRouterProvider router={mockedStaticRouter} context={mockedContext} />
      </App>
    );

    expect(JSON.stringify(appComponent)).toEqual(JSON.stringify(expectedComponent));
  });

  describe('renderToPipeableStream', () => {
    const notFoundMatches = [{
      route: {
        path: '*',
      },
    }];

    const notFoundContext = {
      ...mockedContext,
      matches: notFoundMatches,
    };

    test('sets the correct response headers', async () => {
      await appHandler(mockReq, mockRes);

      const streamConfig = renderToPipeableStream.mock.calls[0][1];
      streamConfig.onShellReady();

      expect(mockRes.setHeader).toHaveBeenCalledTimes(1);
      expect(mockRes.setHeader).toHaveBeenCalledWith('content-type', 'text/html');
    });

    test('pipes the response to the stream', async () => {
      await appHandler(mockReq, mockRes);

      const streamConfig = renderToPipeableStream.mock.calls[0][1];
      streamConfig.onShellReady();

      expect(mockPipe).toHaveBeenCalledTimes(1);
      expect(mockPipe).toHaveBeenCalledWith(mockRes);
    });

    test('sets statusCode to 500 on stream failure', async () => {
      await appHandler(mockReq, mockRes);

      const streamErr = 'Up the creek!';
      const streamConfig = renderToPipeableStream.mock.calls[0][1];
      streamConfig.onError(streamErr);
      streamConfig.onShellReady();

      expect(mockConsoleErr).toHaveBeenCalledTimes(1);
      expect(mockConsoleErr).toHaveBeenCalledWith('Streaming failure:', streamErr);
      expect(mockRes.statusCode).toBe(500);
    });

    test('sets statusCode to 404 on when path match not found', async () => {
      mockedHandler.query.mockImplementationOnce(() => Promise.resolve(notFoundContext));

      await appHandler(mockReq, mockRes);

      const streamConfig = renderToPipeableStream.mock.calls[0][1];
      streamConfig.onShellReady();

      expect(mockRes.statusCode).toBe(404);
    });

    test('sets statusCode to match the context object statusCode when match found', async () => {
      await appHandler(mockReq, mockRes);

      const streamConfig = renderToPipeableStream.mock.calls[0][1];
      streamConfig.onShellReady();

      expect(mockRes.statusCode).toBe(mockedContext.statusCode);
    });
  });
});
