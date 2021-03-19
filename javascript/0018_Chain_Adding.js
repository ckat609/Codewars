const add = (n) => {
  const sum = (y) => {
    return add(n + y);
  };

  sum.valueOf = () => n;

  return sum;
};

console.log(add(3)(5)(7));
