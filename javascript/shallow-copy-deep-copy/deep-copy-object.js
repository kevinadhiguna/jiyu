// Deep copy : does NOT mutate the original variable (array, object, etc.)
let baseballer = {
  name: "Shohei Ohtani",
  club: "Los Angeles Angels"
};

// Deep copy an object
// -- (1) using a spread operator (The BEST way to deep copy in JavaScript) --
let player = {...baseballer};
player.copiedUsing = "Spread Operator";
console.log(player);
// { name: 'Shohei Ohtani', club: 'Los Angeles Angels', copiedUsing: 'Spread Operator' }

// -- (2) using 'Object.assign()' method --
let player2 = Object.assign({}, baseballer);
player2.copiedUsing = "Object.assign()";
console.log(player2);
// { name: 'Shohei Ohtani', club: 'Los Angeles Angels', copiedUsing: 'Object.assign()' }

// -- (3) using 'JSON.stringify()' and then 'JSON.parse()' --
let player3 = JSON.parse(JSON.stringify(baseballer));
player3.copiedUsing = "JSON.stringify() then JSON.parse()"
console.log(player3);
// { name: 'Shohei Ohtani', club: 'Los Angeles Angels', copiedUsing: 'JSON.stringify() then JSON.parse()' }

console.log("Original :", baseballer);
// Original : { name: 'Shohei Ohtani', club: 'Los Angeles Angels' }
