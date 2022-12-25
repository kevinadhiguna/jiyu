let data = [
  { date : "17/03/2022", count : 2 },
  { date : "17/05/2022", count : 2 },
  { date : "17/07/2022", count : 7 },
];

let data2 = [...data];
console.log(data2);
// [
//   { date: '17/03/2022', count: 2 },
//   { date: '17/05/2022', count: 2 },
//   { date: '17/07/2022', count: 7 }
// ]

// If the original data is an array, it can produce a new object. (NOT vice versa, see 'object-literals.js' for more)
let data3 = {...data};
console.log(data3);
// {
//   '0': { date: '17/03/2022', count: 2 },
//   '1': { date: '17/05/2022', count: 2 },
//   '2': { date: '17/07/2022', count: 7 }
// }

// === Date ===

const time = [2016, 5, 11];
const date = new Date(...time);
console.log("date :", date); // date : 2016-06-10T00:00:00.000Z

// === Concatenate and Combine arrays ===
const rma = ["Ronaldo", "Modric", "Ramos"];
const bar = ["Messi", "Iniesta", "Pique"];
const fcb = ["Muller", "Goretzka", "Upamecano"];

const elClasico = [...rma, ...bar]; // <- order matters!
console.log(elClasico);
// [ 'Ronaldo', 'Modric', 'Ramos', 'Messi', 'Iniesta', 'Pique' ]

const players = ["Mane", ...rma, "Minamino", ...bar, "Van Dijk", ...fcb];
console.log(players);
// [
//   'Mane',     'Ronaldo',
//   'Modric',   'Ramos',
//   'Minamino', 'Messi',
//   'Iniesta',  'Pique',
//   'Van Dijk', 'Muller',
//   'Goretzka', 'Upamecano'
// ]
