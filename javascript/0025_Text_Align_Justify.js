const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.";

function processLine(text, len, max, isLast = false) {
  let div = Math.floor((max - len) / (text.length - 1));
  let mod = (max - len) % (text.length - 1);

  const line = text.reduce((prev, word, i) => {
    prev += (i > 0 ? (isLast ? " " : " ".repeat(div)) : "") + (i > 0 && mod > 0 && !isLast ? " " : "") + word;
    mod -= i > 0 && mod > 0 ? 1 : 0;
    return prev;
  }, "");

  return line;
}

function justify(text, len) {
  const words = text.split(" ");

  const output = words.reduce(
    (prev, word, i) => {
      if (prev.lineSpacesLength + word.length + 1 <= len) {
        return {
          paragraph: prev.paragraph,
          currentLine: [...prev.currentLine, word],
          lineLength: prev.lineLength + word.length,
          lineSpacesLength: prev.lineSpacesLength + word.length + (prev.lineSpacesLength === 0 ? 0 : 1),
        };
      } else {
        return {
          paragraph: prev.paragraph + (prev.paragraph.length === 0 ? "" : "\n") + processLine(prev.currentLine, prev.lineLength, len),
          currentLine: [word],
          lineLength: word.length,
          lineSpacesLength: word.length,
        };
      }
      return prev.paragraph;
    },
    { paragraph: "", paragraphList: [], currentLine: [], lineLength: 0, lineSpacesLength: 0 }
  );

  const lastLine = processLine(output["currentLine"], output["lineLength"], len, true);

  return output["paragraph"] + (lastLine.length > 0 ? "\n" + lastLine : "");
}

console.log(justify(text, 25));
// justify(text, 25);
