const createdTime = new Date('2023-01-04T12:01:27.651+00:00');
console.log('Created time :', createdTime);
// JavaScript in browser  : Wed Jan 04 2023 19:01:27 GMT+0100 (Central European Time West Africa Time)
// Node.js                : 2023-01-04T19:01:27.651Z

const now = new Date();
console.log('Now :', now);
// JavaScript in browser  : Thu Jan 19 2023 00:59:54 GMT+0100 (Central European Time West Africa Time)
// Node.js                : 2023-01-19T00:59:54.084Z

console.log('\n=====\n');

/**
 * 
 * @param {Date} startDate 
 * @param {Date} endDate 
 * @returns number
 */
function getDayDiff(startDate, endDate) {
  const oneDayInMs = 24 * 60 * 60 * 1000;
  const dayDiff = Math.round(
    Math.abs(
      ( endDate.getTime() - startDate.getTime() ) / oneDayInMs
    )
  );
  return dayDiff;
}

const dayDiff = getDayDiff(now, createdTime);
console.log('Day difference :', dayDiff); // 15

const daysWithin = 14;
if (dayDiff > daysWithin) {
  console.log(`Result : surpassed ${daysWithin} days`);
} else {
  console.log(`Result : not yet passed ${daysWithin} days`);
}

// Reference: https://bobbyhadz.com/blog/javascript-get-number-of-days-between-two-dates
