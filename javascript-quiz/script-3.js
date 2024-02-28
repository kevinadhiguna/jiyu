// Closure
function randomFunction() {
    let a = 5;

    function inner() {
        return a;
    }

    return inner;
}

let get_inner_func = randomFunction();

// console.log(get_inner_func); // [Function: inner]
console.log(get_inner_func()); // 5
console.log(get_inner_func()); // 5
console.log(get_inner_func()); // 5
