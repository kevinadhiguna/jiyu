const moment = require("moment");

console.log("moment().format() :", moment().format()); // 2022-03-02T02:46:33+00:00
console.log("moment().format('MMMM Do YYYY') :", moment().format("MMMM Do YYYY")); // March 2nd 2022
console.log("moment().format('MMM Do YYY') :", moment().format("MMM Do YY")); // Mar 2nd 22
console.log("moment().format('dddd') :", moment().format("dddd")); // Wednesday
console.log("moment().format('DD/MM/YYYY') :", moment().format('DD/MM/YYYY')); // 02/03/2022
