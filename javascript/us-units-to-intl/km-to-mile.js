const km = 300;
const miles = km * 0.621371;

console.log(`[Precise] ${km} km is equal to ${miles} miles`);
// Output: [Precise] 300 km is equal to 186.4113 miles

function roundNumber(number) {
    // Round to 2 decimal places
    return Math.round(number * 100) / 100;
}

const roundedMiles = roundNumber(miles);
console.log(`[Rounded] ${km} km is equal to ${roundedMiles} miles`);
// Output: [Rounded] 300 km is equal to 186.41 miles
