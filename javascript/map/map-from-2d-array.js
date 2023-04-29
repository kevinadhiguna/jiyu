const players = [
  ["Ohtani", "Angels"],
  ["Betts", "Dodgers"],
  ["Judge", "Yankees"],
  ["Riley", "Braves"],
  ["DeGrom", "Rangers"],
];

const playersMap = new Map(players);

console.log("playersMap :", playersMap);
// playersMap : Map(5) {
//   'Ohtani' => 'Angels',
//   'Betts' => 'Dodgers',
//   'Judge' => 'Yankees',
//   'Riley' => 'Braves',
//   'DeGrom' => 'Rangers'
// }

console.log("typeof playersMap :", typeof playersMap);
// typeof playersMap : object

console.log("playersMap.size :", playersMap.size);
// playersMap.size : 5
