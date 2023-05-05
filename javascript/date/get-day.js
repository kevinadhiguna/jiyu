const day = new Date().getDay();
let today = "";

switch (day) {
  case 0:
    today = "Sunday";
    break;

  case 1:
    today = "Monday";
    break;

  case 2:
    today = "Tuesday";
    break;

  case 3:
    today = "Wednesday";
    break;

  case 4:
    today = "Thursday";
    break;

  case 5:
    today = "Friday";
    break;

  case 6:
    today = "Saturday";
    break;

  default:
    break;
}

console.log(`How ya doin'? Today is ${today}, have a fantastic day!`);

// Reference: https://www.w3schools.com/js/js_switch.asp
