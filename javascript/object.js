const obj = {
    name: "Harper",
    age: 25,
    occupation: "Athlete",
    club: "Los Angeles Angels",
};

// Getting an entire object
console.log("Getting an entire object :", obj);

// Getting an object’s keys
console.log("Getting an object’s keys :", Object.keys(obj));

// Getting an object’s values
console.log("Getting an object’s values :", Object.values(obj));

// Getting an object’s entries (returns an array of arrays. Each array consists of a pair of values)
console.log("Getting an object’s entries :", Object.entries(obj));

// Stringify an object
console.log("Stringify an object :", JSON.stringify(obj));
