String.prototype.toJadenCase = function () {
  let strIn = this.toString();
  let strOut = "";
  const strLength = strIn.length;

  for (let i = 0; i < strLength; i++) {
    strOut +=
      i === 0 || strIn[i - 1] === " " ? strIn[i].toUpperCase() : strIn[i];
  }
  return strOut;
};

const aString = "how can mirrors be real if our eyes aren't real";

console.log(aString.toJadenCase());
