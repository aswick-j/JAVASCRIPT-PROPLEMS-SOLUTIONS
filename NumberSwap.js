const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//output [1,9,2,8,3,7,4,6,5]

const swap = [];

for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    swap.push(arr[Math.floor(i / 2)]);
  } else {
    swap.push(arr[arr.length - Math.floor(i / 2) - 1]);
  }
}

console.log(swap);
