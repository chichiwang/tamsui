import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port: Number = 8080;

app.get('/', function handleRoot(req: Request, res: Response) {
  res.send('<p>Hello, World!</p>');
});

app.listen(port, function serverListening() {
  console.log(`[server] Server is listening at http://127.0.0.1:${port}`);
});
