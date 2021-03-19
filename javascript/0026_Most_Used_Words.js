const text =
  "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.";

const processWord = (word) => {
  var cleanString = word.toLowerCase().replace(/[?,.\-<>!@#$%^&*()']/g, "");
  return cleanString;
};

function topThreeWords(text) {
  const newText = text.split(" ");
  let minMidMax = { min: {}, mid: {}, max: {} };

  const words = newText.reduce((prev, word) => {
    let tempWord = processWord(word);
    prev[tempWord] = prev[tempWord] ? prev[tempWord] + 1 : 1;

    return prev;
  }, {});

  for (let word in words) {
    minMidMax["max"] = { word: words[word] };
  }

  console.log(minMidMax);
  return words;
}

topThreeWords(text);

// processWord("hello's.");
