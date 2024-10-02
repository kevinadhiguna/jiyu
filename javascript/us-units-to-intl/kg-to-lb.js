const kgWeight = 74;
const lbsWeight = kgWeight * 2.205;

console.log(`[Precise] If you weigh ${kgWeight} kgs, you weigh ${lbsWeight} lbs`);
// Output: [Precise] If you weigh 74 kgs, you weigh 163.17000000000002 lbs

function roundNumber(number) {
    // Round to 2 decimal place
    return Math.round(number * 100) / 100;
}

const roundedLbsWeight = roundNumber(lbsWeight);
console.log(`[Rounded] If you weigh ${kgWeight}, you weigh ${roundedLbsWeight} lbs`);
// Output: [Rounded] If you weigh 74, you weigh 163.17 lbs
