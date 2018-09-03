const random = function (seed) {
  const state = ((seed * 7) % 101) + 1;
  const randomNumber = (state % 10) + 1;

  return { state, randomNumber };
};

let state = Date.now();

for (let i = 0; i < 10; i++) {
  const result = random(state);

  state = result.state;
  let randomNumber = result.randomNumber;

  process.stdout.write(randomNumber + ' ');
}
