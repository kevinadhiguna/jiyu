function* counter(value) {
    while (true) {
        const step = yield value++;

        if (step) {
            value += step;
        }
    }
}

const generator = counter(0);

console.log("[1] generator.next().value: ", generator.next().value); // 0
console.log("[2] generator.next().value: ", generator.next().value); // 1
console.log("[3] generator.next(3).value: ", generator.next(3).value); // 5
console.log("[4] generator.next().value: ", generator.next().value); // 6
console.log("[5] generator.next(5).value: ", generator.next(5).value); // 12
console.log("[6] generator.next().value: ", generator.next().value); // 13
