const numbers = [5, 16, 7, 19, 198, 1037, 1887];

function isEvenNumber(array) {
  const evenNumbersArray = [];
  for (let i = 0; i < array.length; i++) {
    array[i] % 2 == 0 ? evenNumbersArray.push(array[i]) : null;
  }
  return evenNumbersArray;
}

// Execute the function
const result = isEvenNumber(numbers);

// Show results
console.log(
  "Among these numbers :\n",
  numbers,
  "\nEven Numbers are :\n",
  result
);
// OUTPUT
// Among these numbers :
//  [
//      5,  16,    7,
//     19, 198, 1037,
//   1887
// ]
// Even Numbers are :
//  [ 16, 198 ]
