const crypto2 = require('crypto2');

// IIFE - Immediately Invoked Function Expressions
(async function () {
  const privateKey = await crypto2.readPrivateKey('rsaPrivateKey.pem');
  const publicKey = await crypto2.readPublicKey('rsaPublicKey.pem');

  const encrypted = await crypto2.encrypt.rsa('the native web', publicKey);
  const decrypted = await crypto2.decrypt.rsa(encrypted, privateKey);

  console.log(decrypted);

  const signature = await crypto2.sign('the native web', privateKey);
  const isSignatureValid = await crypto2.verify('the native web', publicKey, signature);

  console.log(isSignatureValid);
})();
