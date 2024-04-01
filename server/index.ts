import path from 'node:path';

import express, {
  Express,
} from 'express';
import pino from 'pino-http';

import appHandler from './appHandler';

const app: Express = express();
const logger = pino();
const port: Number = 8080;

app.use(logger);
app.use('/scripts', express.static(path.resolve(__dirname, 'scripts')));
app.use('/styles', express.static(path.resolve(__dirname, 'styles')));

app.get('*', appHandler);

app.listen(port, function serverListening() {
  console.log(`[server] Server is listening at http://127.0.0.1:${port}`);
});
