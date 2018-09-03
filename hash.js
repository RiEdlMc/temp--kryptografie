const crypto = require('crypto');

// const hashes = crypto.getHashes();
// console.log(hashes);

const algorithm = crypto.createHash('sha512');

algorithm.on('data', data => {
  console.log(data.toString('hex'));
});

algorithm.write('Hallo ');
algorithm.write('Welt');
algorithm.end();
