// Quadratic equation: ax**2 + bx + c

const a = 1;
const b = 6;
const c = 9;

const d = (b ** 2) - (4 * a * c);

// Solutions:
// To-do: check if d is non-negative or not before finding solutions
const n1 = (-b - Math.sqrt(d)) / (2 * a);
const n2 = (-b + Math.sqrt(d)) / (2 * a);

let displayA;

if (a = 1) {
    console.log(`[Solution] x^2 + (${b})x + (${c}) : n1 = ${n1} & n2 = ${n2}`);
} else {
    console.log(`[Solution] ${a}x^2 + (${b})x + (${c}) : n1 = ${n1} & n2 = ${n2}`);
}

// Output: [Solution] x^2 + (6)x + (9) : n1 = -3 & n2 = -3
// (Wrong) To-do: fix this [Should be n1=3 , n2=3]
