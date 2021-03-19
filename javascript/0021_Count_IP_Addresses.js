const assert = require("assert/strict");

function ipsBetween(start, end) {
  const ipStart = start.split(".");
  const ipEnd = end.split(".");
  let res = 0;

  for (let i = 0; i < 4; i++) {
    res += (Number(ipEnd[i]) - Number(ipStart[i])) * 256 ** (3 - i);
  }

  return res;
}

assert.strictEqual(ipsBetween("10.0.0.0", "10.0.0.50"), 50);
assert.strictEqual(ipsBetween("20.0.0.10", "20.0.1.0"), 246);
