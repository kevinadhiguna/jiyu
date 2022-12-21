const response = [
  {
    "favHeroIndustries": ["DC Comics"],
    "favHeroes": [
      "Superman",
      "Spiderman",
      "Black Phanter",
    ],
    "genre": ["Action"],
    "_id": "5e170bdc863b0619d9828fe3",
    "code": "SSB",
    "displayName": "Legendary",
  },
  {
    "favHeroIndustries": ["Marvel"],
    "favHeroes": [
      "Aquaman",
      "Black Widow",
    ],
    "genre": ["Action", "Comedy"],
    "_id": "5e170eaf863b0619d982904d",
    "code": "AB",
    "displayName": "Unsung Heroes",
  },
  {
    "favHeroIndustries": ["Marvel", "DC Comics"],
    "favHeroes": [
      "Antman",
      "Green Lantern",
    ],
    "genre": ["Action", "Comedy", "Innovation"],
    "_id": "5e171153863b0619d982916e",
    "code": "ASG",
    "displayName": "One-season Wonder",
  },
];

// warning: 'object spread property' is only available in ES9 (use 'esversion: 9').
let availableGenres = response.reduce((x, y) => ({ ...x, [y._id]: y.displayName}), {}); 
console.log('availableGenres : ', availableGenres);
// Output :
// availableGenres :  {
//   '5e170bdc863b0619d9828fe3': 'Legendary',
//   '5e170eaf863b0619d982904d': 'Unsung Heroes',
//   '5e171153863b0619d982916e': 'One-season Wonder'
// }

// Old way but works well in old version of frameworks/libraries/browsers/technologies
let availableGenres2 = response.reduce((x, y) => Object.assign(x, {[y._id]: y.displayName}), {}); 
console.log('availableGenres2 : ', availableGenres2);
// Output :
// availableGenres2 :  {
//   '5e170bdc863b0619d9828fe3': 'Legendary',
//   '5e170eaf863b0619d982904d': 'Unsung Heroes',
//   '5e171153863b0619d982916e': 'One-season Wonder'
// }
