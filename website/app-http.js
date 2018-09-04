'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html'
  });
  
  res.write('Hallo Welt :-)');
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000...');
});
