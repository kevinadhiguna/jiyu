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
