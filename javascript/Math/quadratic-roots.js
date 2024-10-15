// Quadratic equation: ax**2 + bx + c

a = 1;
b = 6;
c = 9;

d = (b ** 2) - (4 * a * c);

// Solutions:
n1 = (-b - Math.sqrt(d)) / (2 * a);
n2 = (-b + Math.sqrt(d)) / (2 * a);

let displayA;

if (a = 1) {
    console.log(`[Solution] x^2 + (${b})x + (${c}) : n1 = ${n1} & n2 = ${n2}`);
} else {
    console.log(`[Solution] ${a}x^2 + (${b})x + (${c}) : n1 = ${n1} & n2 = ${n2}`);
}

// Output: [Solution] x^2 + (6)x + (9) : n1 = -3 & n2 = -3
// (Wrong) To-do: fix this
