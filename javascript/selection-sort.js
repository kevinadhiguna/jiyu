const numbers = [5, 66, 3, 2, 456, 123];

function selectionSort(array) {
    const arr = array.slice();
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

const sorted_result = selectionSort(numbers);

console.log("=== Selection Sort ===\n");
console.log("Before sorted : ", numbers);
console.log("After sorted : ", sorted_result);
