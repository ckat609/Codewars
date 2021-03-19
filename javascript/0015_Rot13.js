function rot13(aString) {
  let word = "";
  let letterCode = 0;
  let newLetter = "";
  let newLetterCode = 0;

  for (let i = 0; i < aString.length; i++) {
    letterCode = aString[i].charCodeAt();

    if (letterCode >= 97 && letterCode <= 122) {
      newLetterCode = letterCode + 13 > 122 ? 96 + (letterCode + 13 - 122) : letterCode + 13;
    } else if (letterCode >= 65 && letterCode <= 90) {
      newLetterCode = letterCode + 13 > 90 ? 64 + (letterCode + 13 - 90) : letterCode + 13;
    } else {
      newLetterCode = letterCode;
    }

    newLetter = String.fromCharCode(newLetterCode);
    word += newLetter;
  }

  return word;
}

// a:97
// z:122

// A:65
// Z:90

const aString = "test";
const bString = "Test";

console.log(rot13(aString));
console.log(rot13(bString));
