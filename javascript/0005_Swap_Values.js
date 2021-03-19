function swapValues(arr) {
  return ([arr[0], arr[1]] = [arr[1], arr[0]]);
}

console.log(swapValues([1, 2]));
