const arr = [9, 17, -4, -5, 7];

const powerPositives = arr.reduce((accumulator, currentValue) => {
  if (currentValue > 0) {
    accumulator.push(currentValue**2); 
  }
  return accumulator;
}, []);

// index 0
// accumulator : []
// currentValue : 9

// index 1
// accumulator : [81]
// currentValue : 17

// index 2
// accumulator : [81, 289]
// currentValue : -4

// index 3
// accumulator : [81, 289]
// currentValue : -5

// index 4
// accumulator : [81, 289]
// currentValue : 7

// Final: [81, 289, 49]

console.log("powerPositives :", powerPositives);
// powerPositives : [ 81, 289, 49 ]
