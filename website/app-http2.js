'use strict';

const fs = require('fs'),
      path = require('path');

const spdy = require('spdy');

const server = spdy.createServer({
  key: fs.readFileSync(path.join(__dirname, 'privateKey.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'certificate.pem'))
}, (req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html'
  });

  res.write('Hallo Welt :-)');
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000...');
});
