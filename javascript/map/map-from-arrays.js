const players = ["Trout", "Cease", "Harper", "Strider", "Darvish"];
const teams = ["Angels", "Whitesox", "Phillies", "Braves", "Padres"];

const playersMap = new Map();

console.log("playersMap (before) :", playersMap); // {}
console.log("playersMap.size (before) :", playersMap.size); // 0

for (let i = 0; i < players.length; i++) {
  playersMap.set(players[i], teams[i]);
}

console.log("playersMap (after) :", playersMap);
// Map(5) {
//   'Trout' => 'Angels',
//   'Cease' => 'Whitesox',
//   'Harper' => 'Phillies',
//   'Strider' => 'Braves',
//   'Darvish' => 'Padres'
// }
console.log("playersMap.size (after) :", playersMap.size); // 5

// Getting a value in a map
console.log("playersMap.get('Trout') :", playersMap.get("Trout")); // Angels

// Checking a key in a map
console.log("playersMap.has('Trout') :", playersMap.has("Trout")); // true

// -----

// function mapInfo(map, condition) {
//   if (map && typeof map === "object" && condition) {
//     console.log(`${map} (${condition}) : ${map}`);
//     console.log(`${map}.size (${condition}) : ${map}`);
//   } else if (map && typeof map === "object") {
//     console.log(`${map} : ${map}`);
//     console.log(`${map}.size : ${map}`);
//   }
// }
