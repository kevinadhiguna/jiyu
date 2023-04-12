const arr = [72839, 10012, 38171, 22356, 103938];

const hasSomeEvenNumbers = arr.some((num) => {
  return num % 2 === 0;
});

console.log(`Does [${arr}] include even numbers ? ${hasSomeEvenNumbers}`);
