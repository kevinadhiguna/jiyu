const arr = [14543823, 985934595, -77, 3483243, -132384];

const sum = (array) => {
  const result = array.reduce((x, y) => x + y);
  console.log("Sum of ", array, " :", result);
  return result;
}

sum(arr);
