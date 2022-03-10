const players = [
  { name: "Cristiano Ronaldo", club: "Juventus" },
  { name: "Lionel Messi", club: "FC Barcelona" },
  { name: "Robert Lewandowski", club: "Bayern Munich" },
];

function showPlayers() {
  setTimeout(() => {
    players.forEach((players) => {
      console.log(players.name);
    });
  }, 1000);
}

function addPlayer(player, callback) {
  setTimeout(() => {
    players.push(player);
    callback();
  }, 2000);
}

addPlayer({ name: "Kevin De Bruyne", club: "Manchester City" }, showPlayers);
