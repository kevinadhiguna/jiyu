const arr = [11, 15, 17, 19][100, 1, 2];
const arr2 = [11, 15, 17, 19][100, 1, 3];
const arr3 = [11, 15, 17, 19][100, 1, 4];

console.log("arr:", arr); // 17
console.log("arr2:", arr2); // 19
console.log("arr3:", arr3); // undefined

// Explaination:
// The last element from the second array acts as an index to get an element in the first array
// 
// Example:
// const arr2 = [11, 15, 17, 19][100, 1, 2];
// The last element from the second array is 2. Hence, find the 2nd element of the frist array (An array's index starts from 0)
// 2nd element of the first array -> 17
