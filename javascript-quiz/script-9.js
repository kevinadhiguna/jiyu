console.log("[] + []:", [] + []); // 
console.log("[] - []:", [] - []); // 0
console.log("[] * []:", [] * []); // 0
console.log("[] / []:", [] / []); // NaN

console.log("[1] + []", [1] + []); // 1
console.log("[1] + 'abc':", [1] + 'abc'); // 1abc

// Explain:
// While printing an empty array in console.log(), is treated as Array.toString(), so it prints an empty string

console.log("[1, 2, 3] + [4]:", [1, 2, 3] + [4]); // 1,2,34
console.log("[1, 2, 3] + [4, 5]:", [1, 2, 3] + [4, 5]); // 1,2,34,5
console.log("[1, 2, 3] + [4, 5, 6]:", [1, 2, 3] + [4, 5, 6]); // 1,2,34,5,6
console.log("[1, 2] + [4, 5, 6]:", [1, 2] + [4, 5, 6]); // 1,24,5,6
console.log("[1] + [4, 5, 6]:", [1] + [4, 5, 6]); // 14,5,6
