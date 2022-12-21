// Reference: https://www.freecodecamp.org/news/reduce-f47a7da511a9/

const arr = [111, 456, 77, 998, 412];

const above100 = arr.reduce((total, amount) => {
  if (amount > 100) {
    total.push(amount);
  }
  return total;
}, []);

console.log("Numbers above 100 in ", arr, " :", above100);
