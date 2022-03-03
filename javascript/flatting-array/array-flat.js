const numbers = [[4, 5], [9, 2], 0, 1, [3, 4]];
const numberList = numbers.flat();

console.log("Flatted number array :", numberList); // Flatted number array : [ 4, 5, 9, 2, 0, 1, 3, 4 ]

console.log("----------");

const alphaNumber = [[4, 5], [7, "i"], 4, "j", [3, 4]];
const alphaNumberList = alphaNumber.flat();

console.log("Flatted alphanumber array :", alphaNumberList); // Flatted alphanumber array : [ 4, 5, 7, 'i', 4, 'j', 3, 4 ]
