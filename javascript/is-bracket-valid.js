function isBracketValid(s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] == "(" ? total++ : total--;
    if (total < 0) {
      return false;
    }
  }
  return total == 0;
}

console.log("\n=== Are these brackets valid ? ===\n");
console.log(
  "GitHub repository : https://github.com/kevinadhiguna/jiyu/blob/master/javascript/is-bracket-valid.js\n"
);

console.log("Case '()' :", isBracketValid("()") ? "valid" : "invalid"); // Case '()' : valid
console.log("Case '()()' :", isBracketValid("()()") ? "valid" : "invalid"); // Case '()()' : valid
console.log("Case ')(' :", isBracketValid(")(") ? "valid" : "invalid"); // Case ')(' : invalid
console.log("Case '' :", isBracketValid("") ? "valid" : "invalid"); // Case '' : valid
console.log("Case '((()))' :", isBracketValid("((()))") ? "valid" : "invalid"); // Case '((()))' : valid
console.log(
  "Case '((()' :",
  isBracketValid("((()") ? "valid" : "invalid",
  "\n"
);
// Case '((()' : invalid
