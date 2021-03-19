function findUnique(aArray) {
  let obj = {};

  for (let i = 0; i < aArray.length; i++) {
    obj[aArray[i]] = obj[aArray[i]] ? obj[aArray[i]] + 1 : 1;
  }

  let minValue = undefined;
  let minLabel = undefined;

  for (const num in obj) {
    if (minLabel === undefined && minValue === undefined) {
      minLabel = num;
      minValue = obj[num];
    } else {
      if (obj[num] < minValue) {
        minValue = obj[num];
        minLabel = num;
      }
    }
  }

  return Number(minLabel);
}

const aArray = [1, 1, 1, 2, 123, 2, 1, 1];
const bArray = [9, 9, 0.55, 9, 9];

// console.log(findUnique(aArray));
console.log(findUnique(bArray));
