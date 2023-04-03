const moment = require("moment");

let enteredOfficeAt = moment("08:01:15", "HH:mm:ss");
let leftOfficeAt = moment("17:07:09", "HH:mm:ss");

// Get duration between two dates
let duration = moment.duration(enteredOfficeAt - leftOfficeAt).humanize();
console.log("Your work hours today :", duration); // 9 hours

// Reference: https://tutorialzine.com/2012/08/quick-tip-handle-date-and-time-like-a-boss-with-moment-js
