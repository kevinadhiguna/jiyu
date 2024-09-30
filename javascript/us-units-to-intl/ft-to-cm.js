const feetTall = 6.3; // 6'3 feet
const cmTall = feetTall * 30.84;

console.log(`[Precise] If you're ${feetTall} ft tall, you are ${cmTall} cm`);
// Output: [Precise] If you're 6.3 ft tall, you are 194.292 cm 

function roundNumber(number) {
    // round to 2 decimal places
    return Math.round(number * 100) / 100;
}

const roundedCmTall = roundNumber(cmTall);
console.log(`[Rounded] If you're ${feetTall} ft tall, you are ${roundedCmTall} cm`);
// Output: [Rounded] If you're 6.3 ft tall, you are 194.29 cm 
