// Shallow copy : mutate the original variable (array, object, etc.)
let goalsPerSeason = [50, 48, 31, 35, 42];
let scorer = ["Messi", ["Ronaldo"], ["Suarez", "Rooney"], "Salah"];

// -- shallow copy --
let scores = goalsPerSeason;
scores[0] = 51;
scores[scores.length - 1] = 45;

console.log(scores);
// [ 51, 48, 31, 35, 45 ]
console.log(goalsPerSeason);
// [ 51, 48, 31, 35, 45 ] // <- 'goalsPerSeason' was affected

let goalScorer = scorer;
goalScorer[1][0] = "Cristiano";
goalScorer[2][1] = "Van Persie";

console.log(goalScorer);
// [ 'Messi', [ 'Cristiano' ], [ 'Suarez', 'Van Persie' ], 'Salah' ]
console.log(scorer);
// [ 'Messi', [ 'Cristiano' ], [ 'Suarez', 'Van Persie' ], 'Salah' ] // <- 'scorer' was affected
