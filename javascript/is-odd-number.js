const numbers = [5, 16, 7, 19, 198, 1037, 1887];

function isOddNumber(array) {
    const resultArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}

const result = isOddNumber(numbers);
console.log("Among these numbers :", numbers,"odd numbers are :\n", result);
