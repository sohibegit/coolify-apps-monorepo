const http = require('node:http');

const hostname = '0.0.0.0';
const port = 3001;

const server = http.createServer((_req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from App 2!\n');
});

server.listen(port, hostname, () => {
  console.log(`App 2 running at http://${hostname}:${port}/`);
});