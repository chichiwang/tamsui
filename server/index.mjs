import express from 'express';

const app = express();
const port = 8080;

app.get('/', function handleRoot(req, res) {
  res.send('<p>Hello, World!</p>');
});

app.listen(port, function serverListening() {
  console.log(`Server is listening at http://127.0.0.1:${port}`);
});
