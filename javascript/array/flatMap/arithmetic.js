let arr = [9, 17, 23, 37];

const doubled = arr.flatMap((x) => {
  return x * 2;
});
console.log("doubled (after flatMap()) :", doubled); // [ 18, 34, 46, 74 ]

const doubled2 = arr.map((x) => {
  return x * 2;
});
console.log("doubled2 (after map()) :", doubled2); // [ 18, 34, 46, 74 ]
