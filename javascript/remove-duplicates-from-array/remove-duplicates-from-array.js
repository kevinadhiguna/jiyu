let removeArrayDuplicates = (arr) => [...new Set(arr)];

const array = [4, 5, 4, 3, 9, 5];
const removedDuplicates = removeArrayDuplicates(array);

console.log("Before removed :", array); // Before removed : [ 4, 5, 4, 3, 9, 5 ]
console.log("After removed :", removedDuplicates); // After removed : [ 4, 5, 3, 9 ]
