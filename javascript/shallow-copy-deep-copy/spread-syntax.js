// Cons of spread operator : does not deep copy a nested object

let data = [
  { "date" : "17/03/2022", "count" : 2, "james@email.net" : 2 },
  {
    "date" : "17/05/2022",
    "count" : 2,
    "admin@email.com" : 1,
    "secretary@email.uk" : 1
  },
  { "date" : "17/07/2022", "count" : 7, "staff@email.us" : 7 },
];

let copiedData = [...data];
//console.log(copiedData); // Same as 'data' above

const arr = [1, 5, 7];
copiedData.push(arr);
const arr2 = [1, [2, 3], [4, 5, 6], [7, 8, 9]];
copiedData.push(arr2);
//console.log(copiedData);
// [
//   { date: '17/03/2022', count: 2, 'james@email.net': 2 },
//   {
//     date: '17/05/2022',
//     count: 2,
//     'admin@email.com': 1,
//     'secretary@email.uk': 1
//   },
//   { date: '17/07/2022', count: 7, 'staff@email.us': 7 },
//   [ 1, 5, 7 ],
//   [ 1, [ 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// ]

let newCopiedData = [...copiedData];
console.log(newCopiedData);
