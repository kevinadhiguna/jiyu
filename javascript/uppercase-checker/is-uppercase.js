let isUpperCase = (str) => str === str.toUpperCase();

const word = "Evgenovsky";
const lowercaseWord = "villas";
const uppercaseWord = "RUSLAN";

console.log(`Is ${word} uppercase ?`, isUpperCase(word) ? "Yup" : "Nah.."); // Is Evgenovsky uppercase ? Nah..
console.log(
  `Is ${lowercaseWord} uppercase ?`,
  isUpperCase(lowercaseWord) ? "Yes" : "No.."
); // Is villas uppercase ? No..
console.log(
  `Is ${uppercaseWord} uppercase ?`,
  isUpperCase(uppercaseWord) ? "Sure" : "Nope.."
); // Is RUSLAN uppercase ? Sure
