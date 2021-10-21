function isBracketValid(s: string) {
    let total: number = 0;
    for (let i = 0; i < s.length; i++) {
        (s[i] == "(") ? total++ : total--;
        if (total < 0) {
            return false
        }
    }
    return total==0;
}

console.log("Case '()' :", isBracketValid("()"));
console.log("Case '()()' :", isBracketValid("()()"));
console.log("Case ')(' :", isBracketValid(")("));
console.log("Case '' :", isBracketValid(""));
console.log("Case '((()))' :", isBracketValid("((()))"));
console.log("Case '((()' :", isBracketValid("((()"));
