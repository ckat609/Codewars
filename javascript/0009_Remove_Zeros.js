function removeZeros(aArray) {
  let lastZero = aArray.length - 1;
  let currentValue = 0;
  const arrLength = aArray.length - 1;

  const calculateZeros = () => {
    let sumZeros = 0;

    for (let i = 0; i < lastZero; i++) {
      currentValue =
        typeof aArray[i] === "string" ? parseInt(aArray[i]) : aArray[i];
      if (currentValue === 0) {
        sumZeros++;
      }
    }
    return sumZeros;
  };

  const totalZeros = calculateZeros();

  for (let j = 0; j < totalZeros; j++) {
    for (let i = 0; i < lastZero; i++) {
      currentValue =
        typeof aArray[i] === "string" ? parseInt(aArray[i]) : aArray[i];

      if (currentValue === 0) {
        [aArray[i], aArray[i + 1]] = [aArray[i + 1], aArray[i]];
      }
    }
  }
  return aArray;
}

const aArray = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];
const bArray = [1, null, "5", "0", "2", 0, 8, 6, null, false];
const cArray = [1, "0", 2, 0, 52, "0", 7, 0, "3", 1];
const dArray = ["0", "0", "0", 0, 1];
const eArray = [0, 0, 0, 1, 2, 3];
const fArray = [0, 0, 0, 0, 0, 1];
const gArray = ["0", "0", "0", 0, 1];
const hArray = ["0", 0, 0, 1];

// console.log(removeZeros(aArray));
console.log(removeZeros(bArray));
// console.log(removeZeros(cArray));
// console.log(removeZeros(dArray));
// console.log(removeZeros(eArray));
// console.log(removeZeros(fArray));
// console.log(removeZeros(gArray));
console.log(removeZeros(hArray));
