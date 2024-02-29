for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("i (first for-loop):", i); // 0 1 2
    }, 1000);
}

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log("i (second for-loop):", i); // 3 3 3
    }, 1000);
}

// Useful links:
// https://stackoverflow.com/q/750486/14418391
// https://stackoverflow.com/q/762011/14418391
// https://plainenglish.io/blog/50-javascript-output-questions#question-42
