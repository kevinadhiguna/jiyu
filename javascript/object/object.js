const obj = {
  name: "Harper",
  age: 25,
  occupation: "Athlete",
  club: "Los Angeles Angels",
};

// Getting an entire object
console.log("Getting an entire object :", obj);
// OUTPUT
// Getting an entire object : {
//   name: 'Harper',
//   age: 25,
//   occupation: 'Athlete',
//   club: 'Los Angeles Angels'
// }

// Getting an object’s keys
console.log("Getting an object’s keys :", Object.keys(obj));
// OUTPUT
// Getting an object’s keys : [ 'name', 'age', 'occupation', 'club' ]

// Getting an object’s values
console.log("Getting an object’s values :", Object.values(obj));
// OUTPUT
// Getting an object’s values : [ 'Harper', 25, 'Athlete', 'Los Angeles Angels' ]

// Getting an object’s entries (returns an array of arrays. Each array consists of a pair of values)
console.log("Getting an object’s entries :", Object.entries(obj));
// OUTPUT
// Getting an object’s entries : [
//   [ 'name', 'Harper' ],
//   [ 'age', 25 ],
//   [ 'occupation', 'Athlete' ],
//   [ 'club', 'Los Angeles Angels' ]
// ]

// Stringify an object
console.log("Stringify an object :", JSON.stringify(obj));
// OUTPUT
// Stringify an object : {"name":"Harper","age":25,"occupation":"Athlete","club":"Los Angeles Angels"}

// Copying an object
console.log("Copying an object :", { ...obj });
// OUTPUT
// Copying an object : {
//   name: 'Harper',
//   age: 25,
//   occupation: 'Athlete',
//   club: 'Los Angeles Angels'
// }
