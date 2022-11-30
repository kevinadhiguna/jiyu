const arr = ["Angelina", "Sira", "Selena", "Patricia", "Sira", "Angelina"];

const uniqueValue = [...new Set(arr)];
console.log("Unique names in ", arr, " :", uniqueValue);
// Unique names in  [ 'Angelina', 'Sira', 'Selena', 'Patricia', 'Sira', 'Angelina' ]  : [ 'Angelina', 'Sira', 'Selena', 'Patricia' ]
