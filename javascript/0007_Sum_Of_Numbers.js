function getSum(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return ((max + min) * (max - min + 1)) / 2;
}

console.log(getSum(0, -1)); //-1
console.log(getSum(0, 1)); //1
console.log(getSum(1, 0)); //== 1   // 1 + 0 = 1
console.log(getSum(1, 2)); //== 3   // 1 + 2 = 3
console.log(getSum(0, 1)); //== 1   // 0 + 1 = 1
console.log(getSum(1, 1)); //== 1   // 1 Since both are same
console.log(getSum(-1, 0)); // == -1 // -1 + 0 = -1
console.log(getSum(-1, 2)); // == 2  // -1 + 0 + 1 + 2 = 2
