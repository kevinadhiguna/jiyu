const numbers = [5, 16, 7, 19, 198, 1037, 1887];

function isOddNumber(array) {
  const oddNumbersArray = [];
  for (let i = 0; i < array.length; i++) {
    array[i] % 2 != 0 ? oddNumbersArray.push(array[i]) : null;
  }
  return oddNumbersArray;
}

// Execute the function
const result = isOddNumber(numbers);

// Show results
console.log(
  "Among these numbers :\n",
  numbers,
  "\nodd numbers are :\n",
  result
);
// OUTPUT
// Among these numbers :
//  [
//      5,  16,    7,
//     19, 198, 1037,
//   1887
// ]
// odd numbers are :
//  [ 5, 7, 19, 1037, 1887 ]
