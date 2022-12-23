const greeting = "hello";

// (1)
// function reverseString(str) {
//   return [...str].reduce((acc, currVal) => currVal + acc);
// }
//console.log("Reverse", "'", greeting, "'", ":", reverseString(greeting));
// Reverse ' hello ' : olleh

// (2)
console.log("[...greeting] :", [...greeting]); // [ 'h', 'e', 'l', 'l', 'o' ]

const reversed = [...greeting].reduce((acc, currVal) => {
  console.log("acc :", acc);
  console.log("currVal :", currVal);
  let revs = currVal + acc;
  console.log("revs :", revs);
  return revs;
});

// index 0
// acc : h
// currVal : e
// revs = currVal + acc -> revs = eh

// index 1
// acc : eh
// currVal : l
// revs = currVal + acc -> revs = leh

// index 2
// acc : leh
// currVal : l
// revs = currVal + acc -> revs = lleh

// index 3
// acc : lleh
// currVal : o
// revs = currVal + acc -> revs = olleh
