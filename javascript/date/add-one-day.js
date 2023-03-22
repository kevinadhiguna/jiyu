function addDaysToDate(date, days) {
  if (!date) {
    date = new Date();
  }
  return new Date(date.setDate(date.getDate() + days));
}

let date1 = new Date('2019-05-11');

console.log(addDaysToDate(date1, 1)); // 2019-05-12T00:00:00.000Z

// Reference: https://stackoverflow.com/a/69416353
