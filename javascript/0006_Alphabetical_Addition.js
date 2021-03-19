function addLetters(...args) {
  const letters = "abcdefghijklmnopqrstuvwxyz";

  const sum = args.reduce((sum, val) => sum + (letters.indexOf(val) + 1), 0);

  const res = (val) => {
    while (val > 26) {
      val = Math.floor(val % 26);
    }
    return val ? val - 1 : 25;
  };

  return letters[res(sum)];
}

console.log(addLetters("a"));
console.log(addLetters("a", "b", "c"));
console.log(addLetters("a", "b"));
console.log(addLetters("z"));
console.log(addLetters("z", "a"));
console.log(addLetters("y", "c", "d"));
console.log(addLetters());
