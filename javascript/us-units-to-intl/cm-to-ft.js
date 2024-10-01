const cmTall = 190; // 190 cm
const feetTall = cmTall / 30.84;

console.log(`[Precise] If you're ${cmTall} cm tall, you're ${feetTall} feet`);
// Output: [Precise] If you're 190 cm tall, you're 6.160830090791181 feet

function roundNumber(number) {
    // round to 2 decimal places
    return Math.round(number * 100) / 100;
}

let roundedFeetTall = roundNumber(feetTall);
console.log(`[Rounded] If you're ${cmTall} cm tall, you're ${roundedFeetTall} feet`);
// Output: [Rounded] If you're 190 cm tall, you're 6.16 feet
