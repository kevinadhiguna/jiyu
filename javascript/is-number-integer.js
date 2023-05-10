function isInteger(number) {
  if (number) {
    return number % 1 === 0;
  } else {
    console.log(
      "Something went wrong, please check passed argument and try again"
    );
  }
}

const a = 1084359;
console.log(`Is ${a} an integer ? ${isInteger(a)}`);
