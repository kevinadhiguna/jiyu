const moment = require("moment");

console.log("moment().format() :", moment().format()); // 2022-03-02T02:46:33+00:00
console.log("moment().format('MMMM Do YYYY') :", moment().format("MMMM Do YYYY")); // March 2nd 2022
console.log("moment().format('MMM Do YYY') :", moment().format("MMM Do YY")); // Mar 2nd 22
console.log("moment().format('dddd') :", moment().format("dddd")); // Wednesday
console.log("moment().format('DD/MM/YYYY') :", moment().format('DD/MM/YYYY')); // 02/03/2022

const ddMMyyyy_date_1 = "21/03/2022";

// ❌ Invalid date
console.log("moment(new Date(ddMMyyyy_date_1)).format('DD/MM') :", moment(new Date(ddMMyyyy_date_1)).format('DD/MM')); // <- Invalid date
console.log("moment(new Date(ddMMyyyy_date_1)).format('DD/MM') :", moment(new Date(ddMMyyyy_date_1), 'DD/MM/YYYY').format('DD/MM')); // <- Invalid date
// ✅ Correct way to format date (learn more: https://stackoverflow.com/a/35863673)
console.log("moment(ddMMyyyy_date_1, 'DD/MM/YYYY').format('DD/MM') :", moment(ddMMyyyy_date_1, 'DD/MM/YYYY').format('DD/MM')); // 21/03
