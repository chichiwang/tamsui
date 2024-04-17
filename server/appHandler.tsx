import React from 'react';
import {
  Request,
  Response,
} from 'express';
import { renderToPipeableStream } from 'react-dom/server';
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router-dom/server';

import App from 'app/App';
import dataRoutes from 'app/dataRoutes';

import logger from './logger';
import createFetchRequest from './createFetchRequest';
import manifest from './manifest';

const handler = createStaticHandler(dataRoutes);
const redirectCodes = [301, 302, 303, 307, 308];

export default async function appHandler(req: Request, res: Response) {
  let errored = false;
  const notFoundPath = '*';

  res.socket?.on('error', function responseErr(err) {
    logger.error(err);
  });

  const fetchRequest = createFetchRequest(req, res);
  /**
   * TODOS
   *   - Verify that the returned value from context is not a response object
   *     - If it is, handle any redirects necessary
   *   - Wrap everything in a try/catch that will
   *     - Log errors
   *     - Redirect to 500 page
   */
  const context = await handler.query(fetchRequest);

  const contextIsResponse = 'status' in context;
  const isRedirect = contextIsResponse && redirectCodes.includes(context.status);
  const redirectLocation = isRedirect && context.headers.get('location');

  if (isRedirect && redirectLocation) {
    res.status(context.status).redirect(redirectLocation);
    return;
  }

  if (contextIsResponse) {
    // Cannot create a static router if handler.query returned a Response object
    logger.error(new Error('Handler query returned a Response object'));
    res.status(500).redirect('/error');
    return;
  }

  const router = createStaticRouter(handler.dataRoutes, context);

  const notFound = Boolean(context.matches.find(function find404(match) {
    return match.route.path === notFoundPath;
  }));

  const { pipe } = renderToPipeableStream(
    <App manifest={manifest}>
      <StaticRouterProvider router={router} context={context} />
    </App>,
    {
      bootstrapScripts: [`/${manifest['vendors.js']}`, `/${manifest['app.js']}`],
      onShellReady() {
        if (errored) {
          res.statusCode = 500;
        } else if (notFound) {
          res.statusCode = 404;
        } else {
          res.statusCode = context.statusCode;
        }

        res.setHeader('content-type', 'text/html');
        res.cookie('manifest', JSON.stringify(manifest));
        pipe(res);
      },
      onShellError(err) {
        logger.error(err);
        res.status(500).redirect('/error');
      },
      onError(err) {
        errored = true;
        logger.error(err);
      },
    },
  );
}
