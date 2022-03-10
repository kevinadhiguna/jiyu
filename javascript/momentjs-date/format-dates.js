const moment = require("moment");

console.log("moment().format() :", moment().format());
// OUTPUT :
// moment().format() : 2022-03-02T02:46:33+00:00

console.log(
  "moment().format('MMMM Do YYYY') :",
  moment().format("MMMM Do YYYY")
);
// OUTPUT :
// moment().format('MMMM Do YYYY') : March 2nd 2022

console.log("moment().format('MMM Do YYY') :", moment().format("MMM Do YY"));
// OUTPUT :
// moment().format('MMM Do YYY') : Mar 2nd 22

console.log("moment().format('dddd') :", moment().format("dddd"));
// OUTPUT :
// moment().format('dddd') : Wednesday
