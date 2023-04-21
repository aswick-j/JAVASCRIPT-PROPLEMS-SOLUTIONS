const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const evenValues = [];
const oddValues = [];

arr.forEach((item) => {
  if (item % 2 == 0) {
    evenValues.push(item);
  } else {
    oddValues.push(item);
  }
});

console.log(evenValues);
console.log(oddValues);
