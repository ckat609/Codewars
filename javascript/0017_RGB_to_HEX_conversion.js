function rgb(r, g, b) {
  const hex = "0123456789ABCDEF";

  const dec2hex = (val) => {
    let res = 0;
    let hexRes = "";

    val = val > 255 ? 255 : val < 0 ? 0 : val;

    while (val > 16) {
      res = val % 16;
      val = Math.floor(val / 16);
      hexRes = hex[res] + hexRes;
    }

    return hexRes.length != 1 ? "0" + hex[val] : hex[val] + hexRes;
  };

  return dec2hex(r) + dec2hex(g) + dec2hex(b);
}

console.log(rgb(255, 255, 255));
console.log(rgb(148, 0, 211));
console.log(rgb(0, 0, 0));
console.log(rgb(1, 255, 255));
// console.log(rgb(10, 0, 211));
