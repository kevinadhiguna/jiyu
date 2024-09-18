const employees = ["Julia", "Keira", "Kate"];

const [i] = employees;
const [a, b] = employees;
const [j, k, l] = employees;

console.log("i:", i); // i: Julia
console.log(`a: ${a} | b: ${b}`); // a: Julia | b: Keira
console.log(`j: ${j} | k: ${k} | l: ${l}`); // j: Julia | k: Keira | l: Kate
