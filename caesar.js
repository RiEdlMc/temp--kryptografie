const charToNumber = function (char) {
  return char.charCodeAt(0) - 65;
};

const numberToChar = function (number) {
  return String.fromCharCode(number + 65);
};

const encrypt = function (plainText, key = 1) {
  let cipherText = '';

  const chars = plainText.split('');

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === ' ') {
      cipherText += ' ';
      continue;
    }

    const plainNumber = charToNumber(chars[i]);
    const cipherNumber = (plainNumber + key) % 26;

    cipherText += numberToChar(cipherNumber);
  }

  return cipherText;
};

const decrypt = function (cipherText, key = 1) {
  let plainText = '';

  const chars = cipherText.split('');

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === ' ') {
      plainText += ' ';
      continue;
    }

    const cipherNumber = charToNumber(chars[i]);
    const plainNumber = (cipherNumber - key + 26) % 26;

    plainText += numberToChar(plainNumber);
  }

  return plainText;
};

// Bob
const plainText = 'AZ TREFFEN MORGEN';
const cipherText = encrypt(plainText, 13);
console.log(cipherText);

// Alice
const decryptedPlainText = decrypt(cipherText, 13);
console.log(decryptedPlainText);
