function whoIsNext(names, r) {
  let cont = 0;
  let arrLength = names.length;

  const multiplier = (mult) => arrLength * Math.pow(2, mult);
  const power = (pow) => Math.pow(2, pow);

  if (r > arrLength) {
    while (multiplier(cont) < r) {
      r -= multiplier(cont);
      cont++;
    }

    return names[Math.floor((r - 1) / power(cont))];
  } else {
    return names[r - 1];
  }
}

function test(names, r) {
  let tmpNames = [];
  let tmpName = "";

  for (let i = 0; i < r; i++) {
    tmpName = names[0];
    tmpNames = names.slice(1);
    tmpNames.push(tmpName);
    tmpNames.push(tmpName);
    names = tmpNames;
  }

  console.log(names);
  return tmpName;
}

// console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)); // == "Sheldon"
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)); // == "Penny"
console.log(test(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)); // == "Penny"
// console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 534)); // == "Rajesh"
// console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 841)); // == "Leonard"
// console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1802)); // == "Penny"
// console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 5033)); // == "Howard"
// console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 3667)); // == "Penny"
// console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)); // == "Leonard"
