const numbers = [-4, 56, 0, 1267, 12, 7, 98789, 54323, 92812];

function largestNumber(arr) {
  let arrayNumber = arr.slice();
  let largestNumber = arrayNumber[0];
  // (1) For-loop
  // for (let i = 0; i < arrayNumber.length; i++) {
  //     largestNumber < arrayNumber[i]
  //         ? (largestNumber = arrayNumber[i])
  //         : null;
  // }

  // (2) For-each
  arrayNumber.forEach((e) => {
    largestNumber < e ? (largestNumber = e) : null;
  });
  return largestNumber;
}

console.log("The largest number is :", largestNumber(numbers)); // The largest number is : 98789
