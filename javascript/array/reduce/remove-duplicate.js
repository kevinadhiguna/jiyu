let arr = [1,2,3,'a','a','f',3,4,2,'d','d'];

let initialValue = [];

const noDuplicates = arr.reduce((unique, currentValue) => {
  if (unique.indexOf(currentValue) === -1) {
    unique.push(currentValue);
  }
  return unique;
}, initialValue);

console.log(noDuplicates);
// [
//   1,   2, 3,   'a',
//   'f', 4, 'd'
// ]

// ---

// About 'indexOf()' method:
// const num = 3;
// const num2 = 101;
// console.log(arr.indexOf(num)); // 2
// console.log(arr.indexOf(num2)); // -1
