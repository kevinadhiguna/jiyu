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
  for (let i = 0; i < s.length; i++) {
    // If the first index of a character/letter is the same as its last index, then it is unique and a non-repeating chaarcter/letter.
    if (s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) {
      return s.charAt(i);
    }
  }

  // If no letter is unique in a string
  return "-";
}

console.log(
  "The first unique letter in 'faiztheprodigy' :",
  firstUniqueChar("faiztheprodigy"),
  "\n"
);
console.log(
  "The first unique letter in 'aabb' :",
  firstUniqueChar("aabb"),
  "\n"
);
console.log(
  "The first unique letter in 'zzzassdzqppqra' :",
  firstUniqueChar("zzzassdzqppqra"),
  "\n"
);
console.log(
  "The first unique letter in 'xcelrtxcelrtxcelrtxcelrtxcelrtyay' :",
  firstUniqueChar("xcelrtxcelrtxcelrtxcelrtxcelrtyay")
);
