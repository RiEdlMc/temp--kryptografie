const crypto = require('crypto');

const calculateHmac = function (value, secret, callback) {
  const algorithm = crypto.createHmac('sha256', secret);

  algorithm.on('data', data => {
    callback(null, data.toString('hex'));
  });

  algorithm.write(value);
  algorithm.end();
};

// Alice + Bob
const sharedSecret = 'BLUMENKOHL';

// Alice
let message = 'TREFFEN MORGEN';
calculateHmac(message, sharedSecret, (err, hmac) => {
  console.log('Alice:', message, hmac);

  // Eve
  message = message.replace('MORGEN', 'HEUTE');

  // Bob
  console.log('Bob:', message, hmac);
});
