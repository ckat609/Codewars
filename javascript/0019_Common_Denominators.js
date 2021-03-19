const assert = require("assert/strict");

function convertFrac(list) {
  const multAll = list.reduce((acc, a) => acc * a[1], 1);

  const minD = (fractions) => {
    let multiples = {};

    for (let i = 0; i <= multAll; i++) {
      for (let j = 0; j < fractions.length; j++) {
        multiples[i * fractions[j][1]] = multiples[i * fractions[j][1]] ? multiples[i * fractions[j][1]] + 1 : 1;
        if (multiples[i * fractions[j][1]] === fractions.length && i * fractions[j][1] !== 0) {
          return i * fractions[j][1];
        }
      }
    }
    return false;
  };
  const num = minD(list);

  const res = () => {
    let str = "";

    for (let i = 0; i < list.length; i++) {
      str += `(${(num / list[i][1]) * list[i][0]},${num})`;
    }

    return str;
  };

  return res();
}

assert.strictEqual(
  convertFrac([
    [1, 2],
    [1, 3],
    [1, 4],
  ]),
  "(6,12)(4,12)(3,12)"
);

assert.strictEqual(
  convertFrac([
    [69, 130],
    [87, 1310],
    [3, 4],
  ]),
  "(18078,34060)(2262,34060)(25545,34060)"
);

assert.strictEqual(
  convertFrac([
    [1, 1],
    [3, 1],
    [4, 1],
    [5, 1],
  ]),
  "(1,1)(3,1)(4,1)(5,1)"
);
