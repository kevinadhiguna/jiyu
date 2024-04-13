const promise = new Promise((resolve) => {
    console.log(1);
    resolve();
    console.log(2);
});

console.log(3);
console.log(4);

setTimeout(() => {
    console.log(5);
}, 100);

setTimeout(() => {
    console.log(6);
}, 0);

promise.then(() => {
    console.log(7);
});

console.log(8);

// Reference: https://stackoverflow.com/a/46455210

// Output:
// 1
// 2
// 3
// 4
// 8
// 7
// 6
// 5

// -----

// Guess:
// 3
// 4
// 8
// 1
// 6
// 7
// 5
