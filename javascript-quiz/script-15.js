let a = 17, b = 25;

setTimeout(() => {
    console.log('Kai Doe');
    a++;
    b++;
    console.log('a + b (inside setTimeout()):', a + b);   
});
console.log('a + b (outside setTimeout()):', a + b);   

// Output:
// a + b (outside setTimeout()): 42
// Kai Doe
// a + b (inside setTimeout()): 44
