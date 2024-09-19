function* foo(i) {
    while(i < 5) {
        yield i;
        i++;
    }
}

const iterator = foo(1);

console.log("[0] iterator.next().value:", iterator.next().value); // 1
console.log("[1] iterator.next().value:", iterator.next().value); // 2
console.log("[2] iterator.next().value:", iterator.next().value); // 3
console.log("[3] iterator.next().value:", iterator.next().value); // 4
console.log("[4] iterator.next().value:", iterator.next().value); // undefined
