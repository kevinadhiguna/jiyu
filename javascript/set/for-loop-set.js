let youngsters = new Set(["Haaland", "Mbappe", "Gakpo"]);
youngsters["position"] = "forward";

for (const youngster in youngsters) {
  console.log("youngster ('for-in' loop) :", youngster);
  // OUTPUT:
  // youngster ('for-in' loop) : position
}

for (const youngster of youngsters) {
  console.log("youngster ('for-of' loop) :", youngster);
  // OUTPUT:
  // youngster ('for-of' loop) : Haaland
  // youngster ('for-of' loop) : Mbappe
  // youngster ('for-of' loop) : Gakpo
}
