const arr = [111, 456, 77, 998, 412];

const avg = arr.reduce((total, amount, index, array) => {
  total += amount;

  if (index === array.length - 1) {
    return total/array.length;
  } else {
    return total;
  }
});

console.log("average of", arr, " :", avg);
// average of [ 111, 456, 77, 998, 412 ]  : 410.8
