function iqTest(numbers) {
  const nums = numbers.split(" ");

  let odds = [];
  let evens = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 != 0) odds.push(i + 1);
    else evens.push(i + 1);
  }

  return odds.length > evens.length ? evens[0] : odds[0];
}

console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("1 2 2"));
