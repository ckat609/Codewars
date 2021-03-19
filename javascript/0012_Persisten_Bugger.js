function persistent(aNumber) {
  let persistent = 0;

  while (aNumber > 9) {
    const realDigits = aNumber.toString().split("");
    const multiplyDigits = (total, current) => total * current;
    aNumber = realDigits.reduce(multiplyDigits);
    persistent++;
  }
  return persistent;
}

console.log(persistent(39));
