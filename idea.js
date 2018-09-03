const crypto = require('crypto');

const calculateHash = function (value, callback) {
  const algorithm = crypto.createHash('sha256');

  algorithm.on('data', data => {
    const hash = data.toString('hex');

    callback(null, hash);
  });

  algorithm.write(value);
  algorithm.end();
};

const idea = 'Lila Pause Forelle-Joghurt';

let counter = 0;

const callback = (err, hash) => {
  console.log(counter, hash);
  counter += 1;

  process.nextTick(() => {
    calculateHash(hash, callback);    
  });
};

calculateHash(idea, callback);
