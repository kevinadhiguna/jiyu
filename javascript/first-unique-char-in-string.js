// Answer of this question is in : first-non-repeating-char.js

/*
First Unique Character in a String

Given a string s, find the first unique character in it and print the character. If it does not exist, print '-'.
s consist of only lowercase englist letters.
test case:
1. s = "faiztheprodigy"
   result = 'f'

2. s = "aabb"
   result = '-'

3. s = "zzzassdzqppqra"
   result = 'd'

4. s = "xcelrtxcelrtxcelrtxcelrtxcelrtyay"
   result = 'a'
*/

function firstUniqueChar(s) {
    // An object to save letters and their appearences.
    let uniqueChar = {};

    for (let i = 0; i < s.length; i++) {
        !uniqueChar[s[i]] ? (uniqueChar[s[i]] = 1) : uniqueChar[s[i]]++;
    }

    console.log("Count of each letter :", uniqueChar);

    for (let key of Object.keys(uniqueChar)) {
        // Get the first key whose value is 1 (Value = 1 means the letter is unique)
        if (uniqueChar[key] === 1) {
            return s.indexOf(key);
        }
    }

    // If no letter is unique in a string
    return "-";
}

console.log(
    "Index of the first unique letter in this string :",
    firstUniqueChar("faiztheprodigy"),
    "\n"
);
console.log(
    "Index of the first unique letter in this string :",
    firstUniqueChar("aabb"),
    "\n"
);
console.log(
    "Index of the first unique letter in this string :",
    firstUniqueChar("zzzassdzqppqra"),
    "\n"
);
console.log(
    "Index of the first unique letter in this string :",
    firstUniqueChar("xcelrtxcelrtxcelrtxcelrtxcelrtyay")
);
