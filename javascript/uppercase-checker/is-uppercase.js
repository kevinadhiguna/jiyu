let isUpperCase = (str) => str === str.toUpperCase();

const word = "Evgenovsky";
const lowercaseWord = "villas";
const uppercaseWord = "RUSLAN";

console.log(`Is ${word} uppercase ?`, isUpperCase(word) ? "Yup" : "Nah..");
console.log(`Is ${lowercaseWord} uppercase ?`, isUpperCase(lowercaseWord) ? "Yes" : "No..");
console.log(`Is ${uppercaseWord} uppercase ?`, isUpperCase(uppercaseWord) ? "Sure" : "Nope..");
