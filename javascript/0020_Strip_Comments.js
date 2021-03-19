function solution(input, markers) {
  let str = "";
  let isComment = false;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === " " && markers.includes(input[i + 1])) {
      isComment = true;
    }
    if (input[i] == "\n") {
      isComment = false;
    }
    if (!isComment) {
      str += input[i];
    }
  }

  return str;
}

solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]);
