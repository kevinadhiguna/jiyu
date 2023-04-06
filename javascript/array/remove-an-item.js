const players = ["Julio", "Mike", "Aaron"];

console.log("players (BEFORE) :", players);

const index = players.indexOf("Mike");
if (index > -1) {
  // only splice players when item is found
  players.splice(index, 1); // 2nd parameter means remove one item only
}

// players = [2, 9]
console.log("players (AFTER) :", players);
