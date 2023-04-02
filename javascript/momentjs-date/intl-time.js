const moment = require("moment");

const HHmmss_format = "HH:mm:ss";

const intlTime = {
  london: moment.utc().format(HHmmss_format),
  japan: moment.utc().add(9, "hours").format(HHmmss_format),
};

console.log("intlTime.london :", intlTime.london); // 10:17:57
console.log("intlTime.japan :", intlTime.japan); // 19:17:57

// Reference: https://tutorialzine.com/2012/08/quick-tip-handle-date-and-time-like-a-boss-with-moment-js
