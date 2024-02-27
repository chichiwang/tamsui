import express from 'express';

const app = express();
const port = 8080;

app.get('/', function handleRoot(req, res) {
  res.send('<p>Hello, World!</p>');
});

app.listen(port, function serverListening() {
 console.log(`fail linter and tests`);
});
