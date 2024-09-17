
function* generator(n) {
    yield n;
    yield n * 2;
}

const gen = generator(5);

console.log("[1] gen.next().value:", gen.next().value); // 5
console.log("[2] gen.next().value:", gen.next().value); // 10
