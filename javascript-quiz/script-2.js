let arr = [3, 5, 7]

arr[5] = 9

console.log('arr:', arr);

// Answer:
//   0  1  2  3             4  5
//   |  |  |  |             |  |
// [ 3, 5, 7, <2 empty items>, 9 ]
