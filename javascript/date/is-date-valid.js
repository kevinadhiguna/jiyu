const isDateValid = function (...date) {
  return !Number.isNaN(new Date(...date).valueOf())
    ? "Valid date"
    : "Invalid date";
};

const date = {
  arg1: "July 21, 2003 11:13:07",
  arg2: "2011-11-17T09:03:11",
  arg3: "ThisIsDate",
  arg4: "2011-11-17 T09:03:11",
  arg5: {},
};

console.log(`Is ${date.arg1} a valid date ? ${isDateValid(date.arg1)}`); // Valid date
console.log(`Is ${date.arg2} a valid date ? ${isDateValid(date.arg2)}`); // Valid date
console.log(`Is ${date.arg3} a valid date ? ${isDateValid(date.arg3)}`); // Invalid date
console.log(`Is ${date.arg4} a valid date ? ${isDateValid(date.arg4)}`); // Invalid date
console.log(`Is ${date.arg5} a valid date ? ${isDateValid(date.arg5)}`); // Invalid date

// Reference: https://www.30secondsofcode.org/js/s/is-date-valid/
