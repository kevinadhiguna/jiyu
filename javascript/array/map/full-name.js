let users = [
  { firstname: "Joe", lastname: "Woodburn" },
  { firstname: "Niklas", lastname: "Muller" },
  { firstname: "Mathieu", lastname: "Rabiot" },
  { firstname: "Alvaro", lastname: "Gavilan" },
  { firstname: "Cesare", lastname: "Massimo" }
];

const fullname = users.map(x => { return `${x.firstname} ${x.lastname}` });
console.log("fullname :", fullname);
// fullname : [
//   'Joe Woodburn',
//   'Niklas Muller',
//   'Mathieu Rabiot',
//   'Alvaro Gavilan',
//   'Cesare Massimo'
// ]

users.map((element, index, array) => {
  console.log("index :", index);
  console.log("element :", element);
  console.log("array :", array);
  return element;
});
// index : 0
// element : { firstname: 'Joe', lastname: 'Woodburn' }
// array : [
//   { firstname: 'Joe', lastname: 'Woodburn' },
//   { firstname: 'Niklas', lastname: 'Muller' },
//   { firstname: 'Mathieu', lastname: 'Rabiot' },
//   { firstname: 'Alvaro', lastname: 'Gavilan' },
//   { firstname: 'Cesare', lastname: 'Massimo' }
// ]
// index : 1
// element : { firstname: 'Niklas', lastname: 'Muller' }
// array : [
//   { firstname: 'Joe', lastname: 'Woodburn' },
//   { firstname: 'Niklas', lastname: 'Muller' },
//   { firstname: 'Mathieu', lastname: 'Rabiot' },
//   { firstname: 'Alvaro', lastname: 'Gavilan' },
//   { firstname: 'Cesare', lastname: 'Massimo' }
// ]
// index : 2
// element : { firstname: 'Mathieu', lastname: 'Rabiot' }
// array : [
//   { firstname: 'Joe', lastname: 'Woodburn' },
//   { firstname: 'Niklas', lastname: 'Muller' },
//   { firstname: 'Mathieu', lastname: 'Rabiot' },
//   { firstname: 'Alvaro', lastname: 'Gavilan' },
//   { firstname: 'Cesare', lastname: 'Massimo' }
// ]
// index : 3
// element : { firstname: 'Alvaro', lastname: 'Gavilan' }
// array : [
//   { firstname: 'Joe', lastname: 'Woodburn' },
//   { firstname: 'Niklas', lastname: 'Muller' },
//   { firstname: 'Mathieu', lastname: 'Rabiot' },
//   { firstname: 'Alvaro', lastname: 'Gavilan' },
//   { firstname: 'Cesare', lastname: 'Massimo' }
// ]
// index : 4
// element : { firstname: 'Cesare', lastname: 'Massimo' }
// array : [
//   { firstname: 'Joe', lastname: 'Woodburn' },
//   { firstname: 'Niklas', lastname: 'Muller' },
//   { firstname: 'Mathieu', lastname: 'Rabiot' },
//   { firstname: 'Alvaro', lastname: 'Gavilan' },
//   { firstname: 'Cesare', lastname: 'Massimo' }
// ]
