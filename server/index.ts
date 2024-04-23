import path from 'node:path';

import express, {
  Express,
} from 'express';

import logger from './logger';
import httpLogger from './httpLogger';
import appHandler from './appHandler';

const app: Express = express();
const port: Number = 8080;

app.use(httpLogger);
app.use('/scripts', express.static(path.resolve(__dirname, 'scripts')));
app.use('/styles', express.static(path.resolve(__dirname, 'styles')));
app.use('/images', express.static(path.resolve(__dirname, 'images')));

app.get('*', appHandler);

app.listen(port, function serverListening() {
  logger.info(`[server] Server is listening at http://127.0.0.1:${port}`);
});
