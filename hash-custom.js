const numberToChar = function (number) {
  return String.fromCharCode(number + 65);
};

const hash = function (value) {
  const first = value[0];

  const second = numberToChar(value.length % 26);

  const third = numberToChar(value.split('').filter(c => ['A', 'E', 'I', 'O', 'U'].includes(c)).length % 26);

  return `${first}${second}${third}`;
};

const input = 'TREFFEN MORGEN';

const hashValue = hash(input);
console.log(hashValue);
