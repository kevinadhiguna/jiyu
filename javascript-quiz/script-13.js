let sample = {
    a: 11,
    getA: function () {
        setTimeout(() => {
            console.log('a');
        }, 0);

        new Promise(res => res(1))
            .then(c => console.log(c))
            .catch(d => console.log(d));

        setTimeout(() => {
            console.log('b');
        }, 0);
    }
}

sample.getA();
// Output:
// 1
// a
// b

// Explanation:
// A program will execute macrotasks (Promise.then(), Promise.catch(), etc.) first, then proceed to microtasks (setTimeout(), setInterval(), etc.)
