const arr = [1, 2, 3, 2, 3, 4, 4, 3, 2, 4, 4, 6, 2, 5, 7, 24];

const occ = arr.reduce((a, b) => {
  return a[b] ? a[b]++ : (a[b] = 1), a;
}, {});

console.log(occ);
