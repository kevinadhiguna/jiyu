// Assuming tax rate is 14%
let taxRate = () => 0.14;

function getPrice(price, tax = price * taxRate()) {
  return price + tax;
}

let price = 10;
const finalPrice = getPrice(price);

console.log("final price :", finalPrice); // 11.1

// Reference: https://www.javascripttutorial.net/es6/javascript-default-parameters/
