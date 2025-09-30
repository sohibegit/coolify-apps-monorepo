const http = require('node:http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((_req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from App 1!\n');
});

server.listen(port, hostname, () => {
  console.log(`App 1 running at http://${hostname}:${port}/`);
});