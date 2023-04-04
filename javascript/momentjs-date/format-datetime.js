const moment = require("moment");

console.log("moment().format('h:mma') :", moment().format("h:mma")); // 1:17pm

// -- Comparing Moment.js & Native --

// (1)
const moment1 = moment().format("dddd, MMMM Do YYYY, h:mm:ss A");
console.log(`moment().format("dddd, MMMM Do YYYY, h:mm:ss A") :`, moment1); // Wednesday, January 11th 2023, 01:17:16 PM

const native1 = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeStyle: "medium",
}).format(new Date());
console.log(
  `new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeStyle: "medium",
}).format(new Date()) :`,
  native1
); // Wednesday, January 11th 2023, 01:17:16 PM

// (2)
let moment2 = moment().format("ddd, hA");
console.log(`moment().format("ddd, hA") :`, moment2); // Wed, 01 PM

let native2 = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  hour: "numeric",
}).format(new Date());
console.log(
  `new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  hour: "numeric",
}).format(new Date()) :`,
  native2
); // Wed, 01 PM

/**
 * References :
 *
 * - https://thecodebarbarian.com/formatting-javascript-dates-with-moment-js.html
 * - https://github.com/you-dont-need/You-Dont-Need-Momentjs#format
 */
