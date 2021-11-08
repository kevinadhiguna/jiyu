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

function addPlayer(player) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            players.push(player);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject("Can not add a player!");
            }
        }, 2000);
    });
}

addPlayer({ name: "Sergio Ramos", club: "Real Madrid" })
    .then(showPlayers)
    .catch((err) => console.log(err));
