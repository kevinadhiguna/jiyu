const numbers = [56, 89, 119, 2034, 3933];

// 1st way
for (let i = numbers.length - 1; i >=0; i--) {
  const element = numbers[i];
  console.log('element (1) : ', element);
  // element (1) :  3933
  // element (1) :  2034
  // element (1) :  119
  // element (1) :  89
  // element (1) :  56
}

// 2nd way
const numbers2 = [...numbers].reverse();
for (let i = 0; i < numbers2.length; i++) {
  const element = numbers2[i];
  console.log('element (2) : ', element);
  // element (2) :  3933
  // element (2) :  2034
  // element (2) :  119
  // element (2) :  89
  // element (2) :  56
}

// Reference: https://stackoverflow.com/a/54260855
