const miles = 100;
const km = miles * 1.60934;

console.log(`[Precise] ${miles} miles is equal to ${km} km`);
// Output: [Precise] 100 miles is equal to 160.934 km

function roundNumber(number) {
    // round to 2 decimal places
    return Math.round(number * 100) / 100;
}

const roundedKm = roundNumber(km);
console.log(`[Rounded] ${miles} miles is equal to ${roundedKm} km`);
// Output: [Rounded] 100 miles is equal to 160.93 km
