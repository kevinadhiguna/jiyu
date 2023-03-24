// Find the closest index using Binary Search:
function findClosestIndex(arr, element) {
  let from = 0;
  let until = arr.length - 1;

  while (true) {
    const cursor = Math.floor((from + until) / 2);
    if (cursor === from) {
      const diff1 = element - arr[from];
      const diff2 = arr[until] - element;
      return diff1 <= diff2 ? from : until;
    }

    const found = arr[cursor];
    if (found === element) {
      return cursor;
    }

    if (found > element) {
      until = cursor;
    } else if (found < element) {
      from = cursor;
    }
  }
}

let boundaries = [Number.NEGATIVE_INFINITY, 0, 95, 105, 115, 125, 135, 145, 155, 165, 175, 185, 195, 205, 215, 225, 235, 245, 255, 265, 275, 285, 295, 305, 315, 325, 335, 345, 355, 365, 375, 385, 395, 405, 415, 425, 435, 445, 465, 475, 485, 495, Infinity];
let value = 237;

console.log(`The closest index of [${boundaries}] from ${value} : index`, findClosestIndex(boundaries, value));
// The closest index of [0,95,105,115,125,135,145,155,165,175,185,195,205,215,225,235,245,255,265,275,285,295,305,315,325,335,345,355,365,375,385,395,405,415,425,435,445,465,475,485,495,Infinity] from 237 : 15

console.log(`\n`);

// -- Find the closest element without function --
// let closestValue = boundaries[findClosestIndex(boundaries, value)];
// console.log(`The closest element of [${boundaries}] from ${value} :`, closestValue);

// -- Find the closest element with function --
function findClosestValueFromClosestIndex(arr, element) {
  return arr[findClosestIndex(arr, element)];
}

console.log(`The closest element of [${boundaries}] from ${value} :`, findClosestValueFromClosestIndex(boundaries, value));
// The closest element of [0,95,105,115,125,135,145,155,165,175,185,195,205,215,225,235,245,255,265,275,285,295,305,315,325,335,345,355,365,375,385,395,405,415,425,435,445,465,475,485,495,Infinity] from 237 : 235


// Note: let's say the value is 150. It is considered being closer to 145 than 155.

/**
 * References :
 * - Get the closest number out of an array : https://stackoverflow.com/a/67078778
 * - Number.NEGATIVE_INFINITY : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
 * - Infinity : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity
 */
