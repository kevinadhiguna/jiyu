let arr = [100, [29, 56], [77, 98, 13], [80, 97, 19, 11]];

const flattenedArr = arr.reduce((previousValue, currentValue) => {
  console.log("previousValue :", previousValue);
  console.log("currentValue :", currentValue);

  let flat = previousValue.concat(currentValue);
  console.log("previousValue.concat(currentValue) :", flat);
  return flat;
}, []);

console.log("flattenedArr :", flattenedArr);
// previousValue : []
// currentValue : 100
// previousValue.concat(currentValue) : [ 100 ]
// previousValue : [ 100 ]
// currentValue : [ 29, 56 ]
// previousValue.concat(currentValue) : [ 100, 29, 56 ]
// previousValue : [ 100, 29, 56 ]
// currentValue : [ 77, 98, 13 ]
// previousValue.concat(currentValue) : [ 100, 29, 56, 77, 98, 13 ]
// previousValue : [ 100, 29, 56, 77, 98, 13 ]
// currentValue : [ 80, 97, 19, 11 ]
// previousValue.concat(currentValue) : [
//   100, 29, 56, 77, 98,
//    13, 80, 97, 19, 11
// ]
// flattenedArr : [
//   100, 29, 56, 77, 98,
//    13, 80, 97, 19, 11
// ]
