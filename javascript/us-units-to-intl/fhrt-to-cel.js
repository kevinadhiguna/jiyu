const fahrenheit = 73.1;
const celcius = 5 * (fahrenheit - 32) / 9;

console.log(`[Precise] ${fahrenheit} F is equal to ${celcius} C`);
// Output: [Precise] 73.1 F is equal to 22.83333333333333 C

function roundNumber(number) {
    // Round to 2 decimal places
    return Math.round(number * 100) / 100;
}

const roundedCelcius = roundNumber(celcius);
console.log(`[Rounded] ${fahrenheit} F is equal to ${roundedCelcius} C`);
// Output: [Rounded] 73.1 F is equal to 22.83 C
