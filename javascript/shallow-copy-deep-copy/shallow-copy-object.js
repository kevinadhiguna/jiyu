// Shallow copy : mutate the original variable (array, object, etc.)
let baseballer = {
  name: "Shohei Ohtani",
  club: "Los Angeles Angels"
};

// -- shallow copy --
let footballer = baseballer;
footballer.age = 23; // <- new property
footballer.club = "Real Madrid"; // <- existing property
footballer.name = "Shiou Fukuda" // <- new property

console.log(footballer); 
// { name: 'Shiou Fukuda', club: 'Real Madrid', age: 23 }
