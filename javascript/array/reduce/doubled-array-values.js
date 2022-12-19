const arr = [111, 456, 77, 998, 412];

const doubled = arr.reduce((total, amount) => {
  total.push(amount * 2);
  return total;
}, []);

console.log("doubled values of ", arr, " :", doubled);
// doubled values of  [ 111, 456, 77, 998, 412 ]  : [ 222, 912, 154, 1996, 824 ]
