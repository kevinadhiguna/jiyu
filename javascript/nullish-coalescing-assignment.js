const spain = {
  topScorer: "Alvaro Morata",
  playmaker: "Pedri",
};

spain.manager ??= "Luis Enrique";
spain.playmaker ??= "Pablo Gavi"; // Not being assigned since it already has a value

console.log("spain : ", spain);
// Output :
// spain :  {
//   topScorer: 'Alvaro Morata',
//   playmaker: 'Pedri',
//   manager: 'Luis Enrique'
// }

// Another case
const listDefender = (name) => {
  name ??= "Aymeric Laporte";
  console.log("name : ", name);
};

listDefender("Rodri"); // name : Rodri
listDefender(); // name : Aymeric Laporte
