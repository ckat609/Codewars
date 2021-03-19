function friendCheat(aNumber) {
  const sum = (aNumber * (aNumber + 1)) / 2;
  let list = [];

  for (let b = 1; b <= aNumber; b++) {
    let a = (sum - b) / (b + 1);
    let left = a * b;
    let right = sum - a - b;

    if (left === right && a <= aNumber && b <= aNumber && a % 1 === 0 && b % 1 === 0) {
      list.push([a, b]);
    }
  }

  return list;
}

const aNumber = 26;
console.log(friendCheat(aNumber));
