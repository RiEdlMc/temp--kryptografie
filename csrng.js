const crypto = require('crypto');

const bytes = crypto.randomBytes(32);

console.log(bytes.toString('hex'));
