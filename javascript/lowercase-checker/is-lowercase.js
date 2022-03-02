let isLowerCase = (str) => str === str.toLowerCase();

const word = "Steven";
const lowercaseWord = "joe";
const uppercaseWord = "WILLOCK";

console.log(`Is ${word} lowercase ?`, isLowerCase(word) ? "Yup" : "Nah..");
console.log(`Is ${lowercaseWord} lowercase ?`, isLowerCase(lowercaseWord) ? "Yes" : "No..");
console.log(`Is ${uppercaseWord} lowercase ?`, isLowerCase(uppercaseWord) ? "Sure" : "Nope..");
