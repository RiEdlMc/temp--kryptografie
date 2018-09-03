const crypto = require('crypto');

const salt = crypto.randomBytes(32).toString('hex');

console.log(salt);

crypto.pbkdf2('secret', salt, 500000, 64, 'sha256', (err, key) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(key.toString('hex'));
});
