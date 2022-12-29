const player = {
  name: "jose alvarado",
  nationality: "spanish"
};

switch (player.nationality) {
  case "spanish":
    console.log("You can play in EURO");
    break;
  
  case "argentinian":
    console.log("You will play in Copa America");
    break;

  default:
    break;
}
