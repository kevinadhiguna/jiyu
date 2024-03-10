var a = 3;
var b = {
  a: 9,
  b: ++a
};
console.log("a + b.a + ++b.b :", a + b.a + ++b.b); // 18 (answer)
// 3 + 9 + 5 = 17 (guess)

// Exaplanation:
// 1. Before the console.log() line, 'b: ++a' is executed, thus a is already 4
// 2. With that said, the operation would be: 4 + 9 + 5 = 18

let c = 7;
let d = {
  c: 10,
  d: ++c
};
console.log("c + d.c + ++d.d :", c + d.c + ++d.d); // 27 (answer)
// 7 + 10 + 9 = 26 (guess)

// Exaplanation:
// 1. Before the console.log() line, 'd: ++c' is executed, thus c is already 8
// 2. With that said, the operation would be: 8 + 10 + 9 = 27
