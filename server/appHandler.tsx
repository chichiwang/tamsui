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
  StaticHandlerContext,
} from 'react-router-dom/server';

import App from 'app/App';
import dataRoutes from 'app/dataRoutes';

import createFetchRequest from './createFetchRequest';
import manifest from './manifest';

const handler = createStaticHandler(dataRoutes);

export default async function appHandler(req: Request, res: Response) {
  let errored = false;
  const notFoundPath = '*';

  res.socket?.on('error', function responseErr(err) {
    console.error('Fatal:', err);
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
  const context = await handler.query(fetchRequest) as StaticHandlerContext;
  const router = createStaticRouter(handler.dataRoutes, context);

  const notFound = context.matches.reduce(function notFoundReducer(isFound, match) {
    if (match.route.path === notFoundPath) {
      return true;
    }

    return false || isFound;
  }, false);

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
      onError(err) {
        errored = true;
        console.error('Streaming failure:', err);
      },
    },
  );
}
