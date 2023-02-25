const numbers = [1, 2, 4, 4, 6, 9, 10, 10, 15];

function isDuplicate(item, index, self) {
  return self.indexOf(item) !== index;
}

const indexOfFirstDuplicate = numbers.findIndex(isDuplicate);
console.log('indexOfFirstDuplicate :', indexOfFirstDuplicate); // 3
