function vowelCount(aWord) {
  return [...aWord].filter((el) => "aeiou".includes(el)).length;
}

console.log(vowelCount("abra cadabra"));
