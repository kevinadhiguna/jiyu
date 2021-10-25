// Currently this program only works to sort number of an array
const array = [17, 9, 3, 12, 11];
const arr = array.slice();

const sorted_result = arr.sort((a, b) => a - b);

console.log("=== Sorting an Array ===\n");
console.log("Before sorted :", array);
console.log("After sorted :", sorted_result);
