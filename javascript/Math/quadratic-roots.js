// Quadratic equation: a(x**2) + bx + c

// [1]
// const a = 1;
// const b = 6;
// const c = 9;
// Output: [Solution] x^2 + (6)x + (9) : n1 = -3 & n2 = -3

// [2]
// const a = 1;
// const b = -5;
// const c = 6;
// Output: [Solution] x^2 + (-5)x + (6) : n1 = 2 & n2 = 3]

// [3]
const a = 2;
const b = 8;
const c = 6;
// Output: [Solution] 2x^2 + (8)x + (6) : n1 = -3 & n2 = -1

const d = (b ** 2) - (4 * a * c);

// Check if d is non-negative or not before finding solutions
if (d < 0) {
    console.log("No real solutions exist");
} else {
    const n1 = (-b - Math.sqrt(d)) / (2 * a);
    const n2 = (-b + Math.sqrt(d)) / (2 * a);

    if (a === 1) {
        console.log(`[Solution] x^2 + (${b})x + (${c}) : n1 = ${n1} & n2 = ${n2}`);
    } else {
        console.log(`[Solution] ${a}x^2 + (${b})x + (${c}) : n1 = ${n1} & n2 = ${n2}`);
    }
}
