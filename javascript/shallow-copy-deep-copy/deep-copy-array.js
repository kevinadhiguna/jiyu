// Deep copy : does NOT mutate the original variable (array, object, etc.)
let greeting = ["Konnichiwa", "Hi", "Hola"];
let nestedNumbers = [10, [20], [30, [40]], 50]

// Deep copy an array
// -- (1) using a spread operator --
let copiedGreeting = [...greeting];
let copiedNestedNumbers = [...nestedNumbers];
console.log(copiedGreeting);
// [ 'Konnichiwa', 'Hi', 'Hola' ]
console.log(copiedNestedNumbers);
// [ 10, [ 20 ], [ 30, [ 40 ] ], 50 ]

// -- (2) using 'JSON.stringify()' then 'JSON.parse()' (Be careful with this one, READ below) --
let copiedGreeting2 = JSON.parse(JSON.stringify(greeting));
let copiedNestedNumbers2 = JSON.parse(JSON.stringify(nestedNumbers));
console.log(copiedGreeting2);
// [ 'Konnichiwa', 'Hi', 'Hola' ]
console.log(copiedNestedNumbers2);
// [ 10, [ 20 ], [ 30, [ 40 ] ], 50 ]

// JSON solution doesn't work with values not compatible with JSON. Examples:

// function nestedCopy(array) {
//   return JSON.parse(JSON.stringify(array));
// }

// undefined are converted to null
//nestedCopy([1, undefined, 2]) // -> [1, null, 2]

// DOM nodes are converted to empty objects
//nestedCopy([document.body, document.querySelector('p')]) // -> [{}, {}]

// JS dates are converted to strings
//nestedCopy([new Date()]) // -> ["2019-03-04T10:09:00.419Z"]

// Reference: https://dev.to/samanthaming/how-to-deep-clone-an-array-in-javascript-3cig
