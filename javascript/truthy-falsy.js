// Falsy values are values that if converted to Boolean, would be 'false'. There six falsy values in JS :
console.log("Boolean(false) : ", Boolean(false)); // false
console.log("Boolean(0) : ", Boolean(0)); // false
console.log("Boolean('') : ", Boolean('')); // false
console.log("Boolean(null) : ", Boolean(null)); // false
console.log("Boolean(NaN) : ", Boolean(NaN)); // false
console.log("Boolean(undefined) : ", Boolean(undefined)); // false

console.log("\n-----------\n");

// Other than falsy values above, the rest are truthy in JS. Here are some :
console.log("Boolean([]) : ", Boolean([])); // true
console.log("Boolean({}) : ", Boolean({})); // true
