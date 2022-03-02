let isLowerCase = (str) => str === str.toLowerCase();

const word = "Steven";
const lowercaseWord = "joe";
const uppercaseWord = "WILLOCK";

console.log(`Is ${word} lowercase ?`, isLowerCase(word) ? "Yup" : "Nah.."); // Is Steven lowercase ? Nah..
console.log(`Is ${lowercaseWord} lowercase ?`, isLowerCase(lowercaseWord) ? "Yes" : "No.."); // Is joe lowercase ? Yes
console.log(`Is ${uppercaseWord} lowercase ?`, isLowerCase(uppercaseWord) ? "Sure" : "Nope.."); // Is WILLOCK lowercase ? Nope..
