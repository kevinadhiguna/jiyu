const initial = [
  {
    modifier: ["julia@tech.net"],
    total: 1,
    date: "02/06/2020"
  },
  {
    modifier: ["julio@email.com"],
    total: 3,
    date: "02/06/2020"
  },
  {
    modifier: ["julian@supernet.uk"],
    total: 5,
    date: "02/06/2020"
  },
  {
    modifier: ["julia@tech.net"],
    total: 3,
    date: "21/07/2021"
  },
  {
    modifier: ["julio@email.com"],
    total: 1,
    date: "21/07/2021"
  },
  {
    modifier: ["julian@supernet.uk"],
    total: 2,
    date: "21/07/2021"
  },
  {
    modifier: ["julia@tech.net"],
    total: 7,
    date: "27/12/2022"
  },
  {
    modifier: ["julio@email.com"],
    total: 3,
    date: "27/12/2022"
  },
  {
    modifier: ["julian@supernet.uk"],
    total: 1,
    date: "27/12/2022"
  },
];

let toExpected = [];

for (let i = 0; i < initial.length; i++) {
  let newElement = {};
  
  let namePart = initial[i].modifier[0].split("@")[0];
  newElement[namePart] = initial[i].total;
  newElement.date = initial[i].date;

  toExpected.push(newElement);
}

//console.log('toExpected (stage 1) : ', toExpected);
// stage 1:
// toExpected = [
//   { julia: 1, date: '02/06/2020' },
//   { julio: 3, date: '02/06/2020' },
//   { julian: 5, date: '02/06/2020' },
//   { julia: 3, date: '21/07/2021' },
//   { julio: 1, date: '21/07/2021' },
//   { julian: 2, date: '21/07/2021' },
//   { julia: 7, date: '27/12/2022' },
//   { julio: 3, date: '27/12/2022' },
//   { julian: 1, date: '27/12/2022' }
// ]


const dates = toExpected.map(x => x.date);
let filtered = toExpected.filter(({date}, index) => !dates.includes(date, index + 1));
console.log("filtered :", filtered);
// filtered : [
//   { julian: 5, date: '02/06/2020' },
//   { julian: 2, date: '21/07/2021' },
//   { julian: 1, date: '27/12/2022' }
// ]

// for (let i = 0; i < toExpected.length; i++) {
//   if (toExpected[i].date === filtered[i].date) {
//     filtered[i] = {...toExpected[i], ...filtered[i]};
//   }
//   console.log("filtered : ", filtered);
// }


// -------------------

// toExpected = [
//   {
//     date: "02/06/2020",
//     julia: 1
//   },
//   {
//     date: "02/06/2020",
//     julio: 3
//   },
//   {
//     date: "02/06/2020",
//     julian: 5
//   }
// ];

// -------------------

// Expected output
const expected = [
  {
    date: "02/06/2020",
    julia: 1,
    julio: 3,
    julian: 5,
    total: 9
  },
  {
    date: "21/07/2021",
    julia: 3,
    julio: 1,
    julian: 2,
    total: 6
  },
  {
    date: "27/12/2022",
    julia: 7,
    julio: 3,
    julian: 1,
    total: 11
  }
];
