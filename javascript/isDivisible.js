const isDivisible = function (dividend, divisor) {
  if (!isNaN(dividend) && !isNaN(divisor)) {
    return dividend % divisor === 0 ? "Yep" : "Nope..";
  }

  // if (!isNaN(dividend) && !isNaN(divisor)) {
  //   return dividend % divisor === 0;
  // } else {
  //   return false;
  // }
};

const number1 = 1160;
const number2 = 5;
console.log(
  `Is ${number1} divisible by ${number2} ? ${isDivisible(number1, number2)}`
);

const number3 = 7391;
const number4 = 11;
console.log(
  `Is ${number3} divisible by ${number4} ? ${isDivisible(number3, number4)}`
);

const number5 = -165;
const number6 = -55;
console.log(
  `Is ${number5} divisible by ${number6} ? ${isDivisible(number5, number6)}`
);

// Reference: https://www.30secondsofcode.org/js/s/is-divisible/
