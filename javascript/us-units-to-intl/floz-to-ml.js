const floz = 20;
const ml = floz * 29.5735;

console.log(`[Precise] ${floz} fl oz is equal to ${ml} ml`);
// Output: [Precise] 20 fl oz is equal to 591.47 ml

function roundNumber(number) {
    // Round to 2 decimal places
    return Math.round(number * 100) / 100;
}

const roundedMl = roundNumber(ml);

console.log(`[Rounded] ${floz} fl oz is equal to ${roundedMl} ml`);
// Output: [Rounded] 20 fl oz is equal to 591.47 ml
