const arr = [34, 32, -889, -3, 23, 1, 99, 23, -6];

//one line function using Sort

const sorting = arr.sort((a, b) => {
  return a - b;
});

console.log(sorting);
