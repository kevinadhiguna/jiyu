const moment = require("moment");

console.log("moment().format() :", moment().format());
console.log(
    "moment().format('MMMM Do YYYY') :",
    moment().format("MMMM Do YYYY")
);
console.log("moment().format('MMM Do YYY') :", moment().format("MMM Do YY"));
console.log("moment().format('dddd') :", moment().format("dddd"));
