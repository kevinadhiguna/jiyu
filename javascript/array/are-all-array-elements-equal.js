function areArrayElementsEqual(arr) {
  return (arr.every(element => element === arr[0])) ? 'Yes' : 'Nope';
}

let array = [3, 12, 11, 15];
let array2 = [7, 7, 7, 7];

console.log(`Are [${array}] array elements equal?`, areArrayElementsEqual(array)); // Are [3,12,11,15] array elements equal? Nope
console.log(`Are [${array2}] array elements equal?`, areArrayElementsEqual(array2)); // Are [7,7,7,7] array elements equal? Yes

// Reference: https://betterprogramming.pub/10-javascript-code-snippets-you-can-use-right-now-e1bb7c7ec35e
