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

// Check if a property exists in an object 
console.log("Does 'name' property exist in the object ?", "name" in obj);
// OUTPUT
// Does 'name' property exist in the object ? true

// Creating an object (NOT recommended to do this way, but it works)
const baseballer = Object.create(obj);
baseballer.manager = "Dan Nattingly";
baseballer.club = "Philadelphia Phillies";
console.log("baseballer :", baseballer);
// OUTPUT
// baseballer : { manager: 'Dan Nattingly', club: 'Philadelphia Phillies' }

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

// Parsing an object
//console.log("Parsing an object :", JSON.parse(obj)); // <- SyntaxError: Unexpected token o in JSON at position 1
console.log("Copying an object :", JSON.parse(JSON.stringify(obj)));
// OUTPUT
// Copying an object : {
//   name: 'Harper',
//   age: 25,
//   occupation: 'Athlete',
//   club: 'Los Angeles Angels'
// }

// Copying an object
console.log("Copying an object :", { ...obj });
// OUTPUT
// Copying an object : {
//   name: 'Harper',
//   age: 25,
//   occupation: 'Athlete',
//   club: 'Los Angeles Angels'
// }

let info = [
  ["name", "Edgar Conan"],
  ["profession", "detective"],
  ["hobby", "football"]
];

// Returns an object created by key-value entries for properties and methods (reverse of 'Object.entries()')
console.log("Returns an object from an iterable (array, map, etc.) :", Object.fromEntries(info));
// Returns an object from an iterable (array, map, etc.) : { name: 'Edgar Conan', profession: 'detective', hobby: 'football' }

let hero = {
  // -- Method before ES6 (still valid in ES6) --
  sayHello: function () {
    console.log('Hello from hero!');    
  },
  // -- Method prior to ES6 --
  greeting() {
    console.log('Greeting from hero!');
  },
  // -- Method name can be separated with a space as long as it is within quotes --
  'favorite city'() {
    console.log('My favorite city is Gotham city');
  },
}

hero.sayHello(); // Hello from hero!
hero.greeting(); // Hi, I am a superhero
hero["favorite city"](); // My favorite city is Gotham city
