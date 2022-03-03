/**
 * Reference : https://javascript.plainenglish.io/reverse-integer-in-javascript-8ec48721ccfb
 * Reverse an integer : 739 -> 937
 *
 * Steps to reverse an integer :
 * (1) 739
 * (2) "739" -> Integer to String (utilizing the '.toString()' method).
 * (3) ["7", "3", "9"] -> Split string into an array separated by a comma (using the '.split("")' method).
 * (4) ["9", "3", "7"] -> Reverse the array elements (powered by the '.reverse()' method).
 * (5) "937" -> Join all elements of the array into a single string. Good thing there is the '.join("")' method that helps one to do this.
 * (6) 937 -> Parse the string into an integer since type of "937" is string, NOT an integer... ('parseInt()' is the right method for this).
 *
 * Note : Multiply minus one if the original number is negative.
 *
 * Last but not least, do not forget to return the variable :)
 */

function reverseInteger(n) {
  const tempCopiedNumber = n;
  let reversedNumber = n
    .toString() // "xyz"
    .split("") // ["x", "y", "z"]
    .reverse() // ["z", "y", "x"]
    .join(""); // "zyx"
  let parsedReverseNumber = parseInt(reversedNumber); // zyx
  return tempCopiedNumber < 0 ? parsedReverseNumber * -1 : parsedReverseNumber; // Add minus, if the original number is negative. Otherwise, just return the reversed number..
}

const number1 = 9762938;
const number2 = -1837065;
console.log("Reversed", number1, "to", reverseInteger(number1)); // Reversed 9762938 to 8392679
console.log("Reversed", number2, "to", reverseInteger(number2)); // Reversed -1837065 to -5607381
