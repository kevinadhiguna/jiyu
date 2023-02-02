// -- (1) Normal object --
const switzerland = {
  currency: "Franc",
  club: "FC Beizel",
};

console.log(switzerland); // { currency: 'Franc', club: 'FC Beizel' }
// -------------------

// -- (2) This might be a wrong example, but ok --
const { norway, ...x } = {
  currency: "Euro",
  club: "Nolde FK",
};

console.log(norway); // undefined
console.log({norway}); // { norway: undefined }
console.log(x.currency); // Euro
console.log(x.club); // Nolde FK

// console.log(currency); // ReferenceError: currency is not defined
// console.log(club); // ReferenceError: club is not defined
// -------------------

// -- (3) Another object --

// 'forward', 'midfielder', 'defender', 'goalkeeper' are available options inside { } in 'const { }'
//    Nevertheless, one can put a rest operator inside the {  } in 'const {  }'
//      --> Example: const { forward, midfielder, ...bluelock } = { forward: "Itoshi Rin", ..., ..., ..., }
const { forward, midfielder, defender, back, goalkeeper } = {
  forward: "Itoshi Rin",
  midfielder: "Isagi Yoichi",
  defender: "Hyouma Cigiri",
  goalkeeper: "Gin Gagamaru",
};

console.log("forward :", forward); // Itoshi Rin
console.log("midfielder :", midfielder); // Isagi Yoichi
console.log("defender :", defender); // Hyouma Cigiri
// Note: notice that 'back' is undefined since it is not inside the defined object (unavailable)
console.log("back :", back); // undefined
console.log("goalkeeper :", goalkeeper); // Gin Gagamaru

// -------------------
