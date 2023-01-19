const createdTime = new Date('2023-01-04T12:01:27.651+00:00');
console.log('Created time :', createdTime); // Created time : Wed Jan 04 2023 19:01:27 GMT+0100 (Central European Time West Africa Time)

const now = new Date();
console.log('Now :', now); // Now : Thu Jan 19 2023 00:59:54 GMT+0100 (Central European Time West Africa Time)

const betweenDatesInMs = Math.abs(createdTime.getTime() - now.getTime());
console.log('Between dates (in ms) :', betweenDatesInMs, 'miliseconds'); // Between dates (in ms) : 1231119019 miliseconds

const oneDayInMs = 24 * 60 * 60 * 1000;
// To-do: consider using Math.round() round the day, but do not use either Math.ceil() and Math.floor()
// const daysBetweenDates = Math.round(betweenDatesInMs / oneDayInMs);
const daysBetweenDates = betweenDatesInMs / oneDayInMs;
console.log('Days between dates (possibly not in an even number) :', daysBetweenDates, 'days'); 
// Days between dates (possibly not in an even number) : 14.249157222222221 days

let daysWithin = 14; // <- Feel free to change days within

if (daysBetweenDates > daysWithin) {
  console.log(`Result : More than ${daysWithin} days into the past`);
} else {
  console.log(`Result : Not yet ${daysWithin} ago`);
}

// Reference: https://bobbyhadz.com/blog/javascript-check-if-date-within-30-days
