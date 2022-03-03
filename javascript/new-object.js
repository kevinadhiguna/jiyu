const baseball = new Object();

baseball.country = "United States of America";
baseball.leagueName = "MLB";
baseball.teamNumbers = 30;
baseball.league = ["AL", "NL"];

console.log(`
  Baseball is one of the most popular sports in ${baseball.country}.
  It has a professional league called ${baseball.leagueName}.
  The competition is separated to ${baseball.league[0]} and ${baseball.league[1]}.
  The total teams in ${baseball.leagueName} is ${baseball.teamNumbers}.
`);
// OUTPUT
//
// Baseball is one of the most popular sports in United States of America.
// It has a professional league called MLB.
// The competition is separated to AL and NL.
// The total teams in MLB is 30.
//

console.log("baseball object looks like this :", baseball);
// OUTPUT
// baseball object looks like this : {
//   country: 'United States of America',
//   leagueName: 'MLB',
//   teamNumbers: 30,
//   league: [ 'AL', 'NL' ]
// }
