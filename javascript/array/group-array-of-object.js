const students = [
  {
    date: '11/07/2012',
    james: 2,
    mary: 1,
    robert: 3,
    anna: 5,
  },
  {
    date: '12/09/2013',
    james: 3,
    mary: 1,
    robert: 2,
    anna: 1,
  },
  {
    date: '16/11/2014',
    james: 7,
    mary: 5,
    robert: 4,
    anna: 6,
  }
];

const result = {};

for (const {date, james, mary, robert, anna} of students) {
  if (!result[date]) result[date] = [];
  result[date].push({ james, mary, robert, anna });
};

console.log(result);
// Output:
// {
//   '11/07/2012': [ { james: 2, mary: 1, robert: 3, anna: 5 } ],
//   '12/09/2013': [ { james: 3, mary: 1, robert: 2, anna: 1 } ],
//   '16/11/2014': [ { james: 7, mary: 5, robert: 4, anna: 6 } ]
// }
