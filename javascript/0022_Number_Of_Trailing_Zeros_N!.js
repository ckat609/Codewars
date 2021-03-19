const assert = require("assert/strict");

function zeros(n) {
  let numZeros = 0;
  let power = 5;

  while (power <= n) {
    numZeros += Math.floor(n / power);
    power *= 5;
  }

  return numZeros;
}

// assert.strictEqual(zeros(0), 0);
// assert.strictEqual(zeros(5), 1);
// assert.strictEqual(zeros(6), 1);
// assert.strictEqual(zeros(30), 7);
zeros(0);
zeros(5);
zeros(10);
zeros(25);
zeros(30);
zeros(40);
zeros(45);
zeros(65);
zeros(1000000000);
