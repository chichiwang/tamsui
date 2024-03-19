import path from 'path';

import express, { Express, Request, Response } from 'express';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import App from 'app/App';

const app: Express = express();
const port: Number = 8080;

app.use('/scripts', express.static(path.resolve(__dirname, 'scripts')));

app.get('*', function handleRoot(req: Request, res: Response) {
  res.socket?.on('error', function responseErr(err) {
    console.error('Fatal:', err);
  });

  let errored = false;

  const { pipe } = renderToPipeableStream(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>,
    {
      bootstrapScripts: ['scripts/app.js'],
      onShellReady() {
        res.statusCode = errored ? 500 : 200;
        res.setHeader('content-type', 'text/html');
        pipe(res);
      },
      onError(err) {
        errored = true;
        console.error('Streaming failure:', err);
      },
    },
  );
});

app.listen(port, function serverListening() {
  console.log(`[server] Server is listening at http://127.0.0.1:${port}`);
});
