function arrayToCsv(arr, delimiter=',') {
  return arr.map(i => i.map(
    j => `"${j}"`
  ).join(delimiter)).join('\n');
}

console.log("[['a', 'b'], ['c', 'd']] :", arrayToCsv([['a', 'b'], ['c', 'd']]));
// [['a', 'b'], ['c', 'd']] : "a","b"
// "c","d"

console.log("[['a', 'b'], ['c', 'd']] with ';' as delimiter :", arrayToCsv([['a', 'b'], ['c', 'd']], ';'));
// [['a', 'b'], ['c', 'd']] with ';' as delimiter : "a";"b"
// "c";"d"

// Reference: https://morioh.com/p/a76bc7d72226
