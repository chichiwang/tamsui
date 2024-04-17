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
import logger from '../logger';

const mockedManifest = {
  'app.js': 'path/to/app.supercomplexhash.js',
  'vendors.js': 'path/to/vendor.surprisinglysimplehash.js',
};

jest.mock('react-router-dom/server');
jest.mock('react-dom/server');
jest.mock('../createFetchRequest');
jest.mock('../logger');
jest.mock('../manifest', () => mockedManifest);

const mockedRes = {
  cookie: jest.fn(),
  redirect: jest.fn(),
  send: jest.fn(),
  setHeader: jest.fn(),
  socket: {
    on: jest.fn(),
  },
  status: jest.fn(),
};

const mockedReq = {
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
let appHandler;

describe('appHandler', () => {
  beforeAll(() => {
    createFetchRequest.mockReturnValue(mockedFetchRequest);
    createStaticHandler.mockReturnValue(mockedHandler);
    createStaticRouter.mockReturnValue(mockedStaticRouter);
    renderToPipeableStream.mockReturnValue({ pipe: mockPipe });
    mockedRes.status.mockReturnValue(mockedRes);
  });

  beforeEach(() => {
    delete mockedRes.statusCode;

    jest.isolateModules(() => {
      appHandler = require('../appHandler').default;
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('creates a static handler', () => {
    expect(createStaticHandler).toHaveBeenCalledTimes(1);

    const param = createStaticHandler.mock.calls[0][0];

    expect(JSON.stringify(param)).toBe(JSON.stringify(dataRoutes));
  });

  test('logs an error when a socket error occurs', async () => {
    await appHandler(mockedReq, mockedRes);

    expect(mockedRes.socket.on).toHaveBeenCalledWith('error', expect.any(Function));

    const resSocketOnCallback = mockedRes.socket.on.mock.calls[0][1];
    const mockErr = 'Totally legit error!';

    resSocketOnCallback(mockErr);

    expect(logger.error).toHaveBeenCalledWith(mockErr);
  });

  test('creates a static router', async () => {
    await appHandler(mockedReq, mockedRes);

    expect(createStaticRouter).toHaveBeenCalledTimes(1);
    expect(createStaticRouter).toHaveBeenCalledWith(mockedHandler.dataRoutes, mockedContext);
  });

  test('renders React app to pipeable stream', async () => {
    await appHandler(mockedReq, mockedRes);

    expect(renderToPipeableStream).toHaveBeenCalledTimes(1);
    expect(renderToPipeableStream).toHaveBeenCalledWith(
      expect.any(Object),
      expect.objectContaining({
        bootstrapScripts: expect.arrayContaining([
          `/${mockedManifest['vendors.js']}`,
          `/${mockedManifest['app.js']}`,
        ]),
        onShellReady: expect.any(Function),
        onShellError: expect.any(Function),
        onError: expect.any(Function),
      }),
    );

    const appComponent = renderToPipeableStream.mock.calls[0][0];
    const expectedComponent = (
      <App manifest={mockedManifest}>
        <StaticRouterProvider router={mockedStaticRouter} context={mockedContext} />
      </App>
    );

    expect(JSON.stringify(appComponent)).toEqual(JSON.stringify(expectedComponent));
  });

  describe('context redirects', () => {
    const redirectLocation = 'Aisle 4';
    const mockedResponseContext = {
      headers: {
        get: jest.fn(() => redirectLocation),
      },
    };

    test('does not redirect when context is not a Response object', async () => {
      await appHandler(mockedReq, mockedRes);

      expect(mockedRes.status).toHaveBeenCalledTimes(0);
      expect(mockedRes.redirect).toHaveBeenCalledTimes(0);
    });

    test('redirects to header location when status code is 301', async () => {
      const statusCode = 301;
      const mockedRedirectContext = Object.assign(mockedResponseContext, {
        status: statusCode,
      });

      mockedHandler.query.mockReturnValueOnce(mockedRedirectContext);

      await appHandler(mockedReq, mockedRes);

      expect(mockedRes.status).toHaveBeenCalledTimes(1);
      expect(mockedRes.status).toHaveBeenCalledWith(statusCode);
      expect(mockedRes.redirect).toHaveBeenCalledTimes(1);
      expect(mockedRes.redirect).toHaveBeenCalledWith(redirectLocation);
    });

    test('redirects to header location when status code is 302', async () => {
      const statusCode = 302;
      const mockedRedirectContext = Object.assign(mockedResponseContext, {
        status: statusCode,
      });

      mockedHandler.query.mockReturnValueOnce(mockedRedirectContext);

      await appHandler(mockedReq, mockedRes);

      expect(mockedRes.status).toHaveBeenCalledTimes(1);
      expect(mockedRes.status).toHaveBeenCalledWith(statusCode);
      expect(mockedRes.redirect).toHaveBeenCalledTimes(1);
      expect(mockedRes.redirect).toHaveBeenCalledWith(redirectLocation);
    });

    test('redirects to header location when status code is 303', async () => {
      const statusCode = 303;
      const mockedRedirectContext = Object.assign(mockedResponseContext, {
        status: statusCode,
      });

      mockedHandler.query.mockReturnValueOnce(mockedRedirectContext);

      await appHandler(mockedReq, mockedRes);

      expect(mockedRes.status).toHaveBeenCalledTimes(1);
      expect(mockedRes.status).toHaveBeenCalledWith(statusCode);
      expect(mockedRes.redirect).toHaveBeenCalledTimes(1);
      expect(mockedRes.redirect).toHaveBeenCalledWith(redirectLocation);
    });

    test('redirects to header location when status code is 307', async () => {
      const statusCode = 307;
      const mockedRedirectContext = Object.assign(mockedResponseContext, {
        status: statusCode,
      });

      mockedHandler.query.mockReturnValueOnce(mockedRedirectContext);

      await appHandler(mockedReq, mockedRes);

      expect(mockedRes.status).toHaveBeenCalledTimes(1);
      expect(mockedRes.status).toHaveBeenCalledWith(statusCode);
      expect(mockedRes.redirect).toHaveBeenCalledTimes(1);
      expect(mockedRes.redirect).toHaveBeenCalledWith(redirectLocation);
    });

    test('redirects to header location when status code is 308', async () => {
      const statusCode = 308;
      const mockedRedirectContext = Object.assign(mockedResponseContext, {
        status: statusCode,
      });

      mockedHandler.query.mockReturnValueOnce(mockedRedirectContext);

      await appHandler(mockedReq, mockedRes);

      expect(mockedRes.status).toHaveBeenCalledTimes(1);
      expect(mockedRes.status).toHaveBeenCalledWith(statusCode);
      expect(mockedRes.redirect).toHaveBeenCalledTimes(1);
      expect(mockedRes.redirect).toHaveBeenCalledWith(redirectLocation);
    });

    test('redirects to error page if context object is Response but not a redirect', async () => {
      const statusCode = 404;
      const mockedRedirectContext = Object.assign(mockedResponseContext, {
        status: statusCode,
      });

      mockedHandler.query.mockReturnValueOnce(mockedRedirectContext);

      await appHandler(mockedReq, mockedRes);

      expect(logger.error).toHaveBeenCalledWith(expect.any(Error));
    });
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
      await appHandler(mockedReq, mockedRes);

      const streamConfig = renderToPipeableStream.mock.calls[0][1];
      streamConfig.onShellReady();

      expect(mockedRes.setHeader).toHaveBeenCalledTimes(1);
      expect(mockedRes.setHeader).toHaveBeenCalledWith('content-type', 'text/html');
    });

    test('sets a cookie containing the manifest', async () => {
      await appHandler(mockedReq, mockedRes);

      const streamConfig = renderToPipeableStream.mock.calls[0][1];
      streamConfig.onShellReady();

      expect(mockedRes.cookie).toHaveBeenCalledTimes(1);
      expect(mockedRes.cookie).toHaveBeenCalledWith('manifest', JSON.stringify(mockedManifest));
    });

    test('pipes the response to the stream', async () => {
      await appHandler(mockedReq, mockedRes);

      const streamConfig = renderToPipeableStream.mock.calls[0][1];
      streamConfig.onShellReady();

      expect(mockPipe).toHaveBeenCalledTimes(1);
      expect(mockPipe).toHaveBeenCalledWith(mockedRes);
    });

    test('sets statusCode to 500 on stream failure', async () => {
      await appHandler(mockedReq, mockedRes);

      const streamErr = 'Up the creek!';
      const streamConfig = renderToPipeableStream.mock.calls[0][1];
      streamConfig.onError(streamErr);
      streamConfig.onShellReady();

      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(logger.error).toHaveBeenCalledWith(streamErr);
      expect(mockedRes.statusCode).toBe(500);
    });

    test('redirects to /error on shell error', async () => {
      await appHandler(mockedReq, mockedRes);

      const shellErr = new Error('Melted in your mouth');
      const streamConfig = renderToPipeableStream.mock.calls[0][1];
      streamConfig.onShellError(shellErr);

      expect(logger.error).toHaveBeenCalledTimes(1);
      expect(logger.error).toHaveBeenCalledWith(shellErr);
      expect(mockedRes.status).toHaveBeenCalledTimes(1);
      expect(mockedRes.status).toHaveBeenCalledWith(500);
      expect(mockedRes.redirect).toHaveBeenCalledTimes(1);
      expect(mockedRes.redirect).toHaveBeenCalledWith('/error');
    });

    test('sets statusCode to 404 on when path match not found', async () => {
      mockedHandler.query.mockImplementationOnce(() => Promise.resolve(notFoundContext));

      await appHandler(mockedReq, mockedRes);

      const streamConfig = renderToPipeableStream.mock.calls[0][1];
      streamConfig.onShellReady();

      expect(mockedRes.statusCode).toBe(404);
    });

    test('sets statusCode to match the context object statusCode when match found', async () => {
      await appHandler(mockedReq, mockedRes);

      const streamConfig = renderToPipeableStream.mock.calls[0][1];
      streamConfig.onShellReady();

      expect(mockedRes.statusCode).toBe(mockedContext.statusCode);
    });
  });
});
