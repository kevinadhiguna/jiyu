const lbsWeight = 180;
const kgWeight = lbsWeight * 0.454;

console.log(`[Precise] If you weigh ${lbsWeight} lbs, you weigh ${kgWeight} kgs`);

function roundNumber(number) {
    // To-do: round the number
    return Math.round(number * 100) / 100;
}

const roundedKgWeight = roundNumber(kgWeight);
console.log(`[Rounded] If you weigh ${lbsWeight} lbs, you weigh ${roundedKgWeight} kgs`);