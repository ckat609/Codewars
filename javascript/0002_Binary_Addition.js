function binaryAddition(a, b) {
  const sum = a + b;

  const binary = (val) => {
    let strSum = "";

    while (val > 0) {
      let res = val % 2;
      val = Math.floor(val / 2);
      strSum = res.toString() + strSum;
    }
    strSum = val > 0 ? val + strSum : strSum;

    return strSum;
  };

  return binary(sum);
}

console.log(binaryAddition(1, 2));
