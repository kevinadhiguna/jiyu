const arr = [1, 21, 11, 201, 33];

console.log("arr (BEFORE) :", arr); // [1, 21, 11, 201, 33]

const newElement = 75;
const newElement2 = 115;
arr.unshift(newElement, newElement2);

console.log("arr (AFTER) :", arr); // [75, 115, 1, 21,11, 201, 33]
