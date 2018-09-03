const sha1 = require('sha1');

// Alice + Bob
const sharedSecret = 'BLUMENKOHL';

// Alice
let message = 'TREFFEN MORGEN';
let hash = sha1(sharedSecret + message);
console.log('Alice:', message, hash);

// Eve
message = message.replace('MORGEN', 'HEUTE');
hash = sha1('???' + message);

// Bob
console.log('Bob:', message, hash);
