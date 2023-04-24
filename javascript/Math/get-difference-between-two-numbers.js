function getDifference(number1, number2) {
  if (!isNaN(number1) && !isNaN(number2)) {
    return Math.abs(number1 - number2);
  } else {
    console.log("Please check arguments and try again");
  }
}

const num1 = 1827;
const num2 = 3569439;

console.log(
  `difference between ${num1} and ${num2} is ${getDifference(num1, num2)}`
);
