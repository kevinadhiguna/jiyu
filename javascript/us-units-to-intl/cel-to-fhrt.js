const celcius = 33.8;
const fahrenheit = 9 * (celcius + 32) / 5;

console.log(`[Precise] ${celcius} C is equal to ${fahrenheit} F`);
// Output: [Precise] 33.8 C is equal to 118.43999999999998 F

function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

const roundedFahrenheit = roundNumber(fahrenheit);
console.log(`[Rounded] ${celcius} C is equal to ${roundedFahrenheit} F`);
// Output: [Rounded] 33.8 C is equal to 118.44 F
