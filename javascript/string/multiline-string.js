const multilineString = `Mention leagues in Major League Baseball!
- American League (AL)
- National League (NL)
Which one are you into?
`;

console.log("multilineString :", multilineString);
// Mention leagues in Major League Baseball!
// - American League (AL)
// - National League (NL)
// Which one are you into?

const anotherMultilineString =
  "Mention leagues in Major League Baseball! \n" +
  "- American League (AL) \n" +
  "- National League (NL) \n" +
  "Which one are you into? \n"; // <- '\n' on the last line is optional

console.log("anotherMultilineString :", anotherMultilineString);
// Mention leagues in Major League Baseball!
// - American League (AL)
// - National League (NL)
// Which one are you into?

const yetAnotherMultilineString =
  "Mention leagues in Major League Baseball! \n \
  - American League (AL) \n \
  - National League (NL) \n \
  Which one are you into? \n"; // <- '\n' on the last line is optional

console.log("yetAnotherMultilineString :", yetAnotherMultilineString);
// Mention leagues in Major League Baseball!
// - American League (AL)
// - National League (NL)
// Which one are you into?

// Reference: https://www.freecodecamp.org/news/javascript-multiline-string-how-to-create-multi-line-strings-in-js/
