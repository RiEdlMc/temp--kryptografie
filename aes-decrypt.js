#!/usr/bin/env node

'use strict';

const crypto = require('crypto'),
      fs = require('fs');

const fileInputName = process.argv[2];
const fileOutputName = `${fileInputName}-decrypted`;
const password = process.argv[3];

const fileInputStream = fs.createReadStream(fileInputName);
const fileOutputStream = fs.createWriteStream(fileOutputName);

const key = crypto.pbkdf2Sync(password, password, 1, 32, 'sha512');
const iv = crypto.pbkdf2Sync(password, password, 1, 16, 'sha512');

const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

fileInputStream.pipe(decipher).pipe(fileOutputStream);
