const NodeRSA = require('node-rsa');

const key = new NodeRSA({ b: 512 });

// const keyPair = key.generateKeyPair(4096, 65537);

const plainText = 'Kryptografie mit Vollbitverschlüsselung ;-)';

const encrypted = key.encrypt(plainText, 'base64');

console.log(encrypted);

const decrypted = key.decrypt(encrypted, 'utf8');

console.log(decrypted);
