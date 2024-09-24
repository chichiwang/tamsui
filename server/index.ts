/* global PORT, SERVE_STATIC */
import path from 'node:path';
import serveStatic from 'serve-static';

import express, {
  Express,
} from 'express';

import logger from './logger';
import httpLogger from './httpLogger';
import appHandler from './appHandler';

const app: Express = express();
const port: Number = PORT;

app.use(httpLogger);
app.use(serveStatic(path.resolve(__dirname, 'static')));

if (SERVE_STATIC) {
  app.use('/scripts', express.static(path.resolve(__dirname, 'scripts')));
  app.use('/styles', express.static(path.resolve(__dirname, 'styles')));
  app.use('/static', express.static(path.resolve(__dirname, 'static')));
}

app.get('*', appHandler);

app.listen(port, function serverListening() {
  logger.info(`[server] Server is listening at http://127.0.0.1:${port}`);
});
