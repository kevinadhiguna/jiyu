console.log("+false :", +false); // 0
console.log("-true :", -true); // -1
console.log("!'HelloWorld!' :", !'HelloWorld!'); // false

// Explanation:
// The unary plus/negative tries to convert an operand to a number => false to 0 // true to 1
// A string is a truthy value => !true -> false
