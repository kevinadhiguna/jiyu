// -- 14 days later from now --
let fourteenDaysLater = new Date(Date.now() + 12096e5); // '12096e5' is a magic number (https://en.wikipedia.org/wiki/Magic_number_(programming))

console.log('fourteenDaysLater :', fourteenDaysLater);
// JavaScript (in browser)  : Thu Feb 02 2023 06:07:29 GMT+0100 (Central European Time West Africa Time)
// Node.js                  : 2023-02-02T06:07:29.313Z
console.log('fourteenDaysLater.toISOString() :', fourteenDaysLater.toISOString()); // 2023-02-02T06:07:29.313Z
console.log('fourteenDaysLater.toDateString() :', fourteenDaysLater.toDateString()); // Thu Feb 02 2023
console.log('fourteenDaysLater.toLocaleDateString() :', fourteenDaysLater.toLocaleDateString()); // 2/2/2023
console.log('fourteenDaysLater.toLocaleString() :', fourteenDaysLater.toLocaleString()); // 2/2/2023, 6:07:29 AM
console.log('fourteenDaysLater.toLocaleTimeString() :', fourteenDaysLater.toLocaleTimeString()); // 6:07:29 AM
console.log('fourteenDaysLater.toTimeString() :', fourteenDaysLater.toTimeString()); // 06:07:29 GMT+0100 (Central European Time West Africa Time)
console.log('fourteenDaysLater.toUTCString() :', fourteenDaysLater.toUTCString()); // Thu, 02 Feb 2023 06:07:29 GMT

// -- 14 days before from now --
let fourteenDaysBefore = new Date(Date.now() - 12096e5);

console.log('fourteenDaysBefore :', fourteenDaysBefore);
// JavaScript (in browser)  : Thu Jan 05 2023 06:07:29 GMT+0100 (Central European Time West Africa Time)
// Node.js                  : 2023-01-05T06:07:29.313Z
console.log('fourteenDaysBefore.toISOString() :', fourteenDaysBefore.toISOString()); // 2023-01-05T06:07:29.313Z
console.log('fourteenDaysBefore.toDateString() :', fourteenDaysBefore.toDateString()); // Thu Jan 05 2023
console.log('fourteenDaysBefore.toLocaleDateString() :', fourteenDaysBefore.toLocaleDateString()); // 1/5/2023
console.log('fourteenDaysBefore.toLocaleString() :', fourteenDaysBefore.toLocaleString()); // 1/5/2023, 6:07:29 AM
console.log('fourteenDaysBefore.toLocaleTimeString() :', fourteenDaysBefore.toLocaleTimeString()); // 6:07:29 AM
console.log('fourteenDaysBefore.toTimeString() :', fourteenDaysBefore.toTimeString()); // 06:07:29 GMT+0100 (Central European Time West Africa Time)
console.log('fourteenDaysBefore.toUTCString() :', fourteenDaysBefore.toUTCString()); // Thu, 05 Jan 2023 06:07:29 GMT

// Reference: https://stackoverflow.com/a/7751977/14418391
