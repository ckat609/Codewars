function snail(arr) {
  let minX = 0;
  let minY = 0;
  let maxX = arr[0].length;
  let maxY = arr.length;
  let maxCount = maxX * maxY;
  let countX = 0;
  let countY = 0;
  let stepX = 1;
  let stepY = 0;

  let snailArr = [];

  for (let i = 0; i < maxCount; i++) {
    snailArr.push(arr[countY][countX]);
    // console.log(`${i}: (${countX},${countY}) - MIN:(${minX},${minY}) - MAX: (${maxX},${maxY}) - ${arr[countY][countX]}`);

    if (countX === minX && countY === minY + 1) {
      minX++;
      minY++;
      maxX--;
      maxY--;
      stepY = 0;
      stepX = 1;
    }
    if (countX === maxX - 1 && countY === minY) {
      stepY = 1;
      stepX = 0;
    }
    if (countX === maxX - 1 && countY === maxY - 1) {
      stepY = 0;
      stepX = -1;
    }
    if (countX === minX && countY === maxY - 1) {
      stepY = -1;
      stepX = 0;
    }

    countX += stepX;
    countY += stepY;
  }
  return snailArr;
}

// [0,0][1,0][2,0][2,1][2,2][1,2][0,2][1,0][1,1]
// console.log(
//   snail([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
// console.log(
//   snail([
//     [1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5],
//   ])
// );
// console.log(
//   snail([
//     [1, 2, 3, 1],
//     [4, 5, 6, 4],
//     [7, 8, 9, 7],
//     [7, 8, 9, 7],
//   ])
// );

console.log(
  snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
);
Test.assertDeepEquals();
