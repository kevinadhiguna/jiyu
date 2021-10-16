const numbers = [5, 66, 3, 2, 456, 123];

function bubbleSort(array) {
    const arr = array.slice();
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const sorted_result = bubbleSort(numbers);

console.log("=== Bubble Sort ===\n");
console.log("Before sorted : ", numbers);
console.log("After sorted : ", sorted_result);
