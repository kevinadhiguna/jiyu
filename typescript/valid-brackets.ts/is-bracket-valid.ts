function isBracketValid(s: string) {
    let total: number = 0;
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
    "GitHub repository : https://github.com/kevinadhiguna/jiyu/blob/master/typescript/is-bracket-valid.ts\n"
);

console.log("Case '()' :", isBracketValid("()"));
console.log("Case '()()' :", isBracketValid("()()"));
console.log("Case ')(' :", isBracketValid(")("));
console.log("Case '' :", isBracketValid(""));
console.log("Case '((()))' :", isBracketValid("((()))"));
console.log("Case '((()' :", isBracketValid("((()"), "\n");
