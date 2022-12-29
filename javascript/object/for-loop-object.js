const land = {
  country: "UK",
  price: 700000,
  landlord: "laurent james",
  hasLandCertificate: true
};

for (const key in land) {
  console.log("key :", key);  
  console.log(`land.${key} :`, land[key]);
  // OUTPUT:
  // key : country
  // land.country : UK
  // key : price
  // land.price : 700000
  // key : landlord
  // land.landlord : laurent james
  // key : hasLandCertificate
  // land.hasLandCertificate : true
}

const landValues = Object.values(land); // ["UK", 700000, "laurent james", true]
//const landValues = ["UK", 700000, "laurent james", true];

// 'for-of' loop is meant for an iterable (like array and map)
// for (const iterator of landValues) {
//   console.log(iterator);
//   // OUTPUT:
//   // UK
//   // 700000
//   // laurent james
//   // true
// }
