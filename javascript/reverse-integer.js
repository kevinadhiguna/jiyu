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
    let parsedInt = parseInt(reversedNumber); // zyx
    return tempCopiedNumber < 0 ? parsedInt * -1 : parsedInt; // Add minus, if the original number is negative. Otherwise, just return the reversed number..
}

const integer = 9762938;
console.log("Reversed", integer, "to", reverseInteger(integer));
