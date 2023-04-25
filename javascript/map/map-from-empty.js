const playersMap = new Map();

console.log("playersMap (before) :", playersMap); // {}
console.log("playersMap.size (before) :", playersMap.size); // 0

playersMap.set("Ohtani", "Angels");
playersMap.set("Betts", "Dodgers");
playersMap.set("Judge", "Yankees");
playersMap.set("Judge", "Yankees");
playersMap.set("Riley", "Braves");
playersMap.set("DeGrom", "Rangers");

console.log("playersMap (after) :", playersMap);
// Map(5) {
//   'Ohtani' => 'Angels',
//   'Betts' => 'Dodgers',
//   'Judge' => 'Yankees',
//   'Riley' => 'Braves',
//   'DeGrom' => 'Rangers'
// }
console.log("playersMap.size (after) :", playersMap.size); // 5
