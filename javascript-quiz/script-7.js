console.log("6000 > 5000 > 3000:", 6000 > 5000 > 3000); // false
console.log("4000 > 7000 > 1000:", 4000 > 7000 > 1000); // false
console.log("9000 > 2000 > 8000:", 9000 > 2000 > 8000); // false
console.log("1500 > 2500 > 3500:", 1500 > 2500 > 3500); // false

// "Why?"
// (1) 6000 > 5000 : TRUE
// (2) TRUE > 3000 : FALSE
// Thus, those are all false
