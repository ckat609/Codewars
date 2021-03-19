function buildTower(floors) {
  let tower = [];

  for (let i = 0; i < floors; i++) {
    let times = 1 + 2 * i;
    tower.push("*".repeat(times));
  }

  let maxBlocks = tower[tower.length - 1].length;

  return tower.map((floor, i) => {
    let emptySpace = " ".repeat(Math.floor((maxBlocks - floor.length) / 2));
    return emptySpace + "*".repeat(1 + 2 * i) + emptySpace;
  });
}

console.log(buildTower(3));
console.log(buildTower(6));
console.log(buildTower(15));
