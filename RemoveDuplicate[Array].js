const arr = [1, 2, 3, 2, 3, 4, 4, 3, 2, 4, 4, 6, 2, 5, 7, 24];

const removeDuplicates = [...new Set(arr)];

console.log(removeDuplicates);
