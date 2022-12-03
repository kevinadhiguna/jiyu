const arr = [14543823, 985934595, -77, 3483243, -132384];

const findMinimum = (array) => {
  const min = array.reduce((x, y) => x < y ? x : y); // Faster than Math.min(...array)
  // const min = Math.min(...array);

  console.log("Minimum value of", array, ":", min);
  return min;
};

const findMaximum = (array) => {
  const max = array.reduce((x, y) => x > y ? x : y); // Faster than Math.max(...array)
  // const max = Math.max(...array);

  console.log("Maximum value of", array, ":", max);
  return max;
};

findMinimum(arr);
findMaximum(arr);
