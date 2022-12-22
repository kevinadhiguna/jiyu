const players = [
  { name: 'Cristiano Ronaldo', origin: 'Portugal' },
  { name: 'Kylian Mbappe', origin: 'France' },
  { name: 'Clint Dempsey', origin: 'US' },
  { name: 'Robert Lewandowski', origin: 'Poland' },
  { name: 'Lionel Messi', origin: 'Argentina' }
];

// Question
// Create a data structured like the following from the record above:
// {
//   "Cristiano Ronaldo": { origin: 'Portugal', isFromEurope: true },
//   "Kylian Mbappe": { origin: 'France', isFromEurope: true },
//   "Clint Dempsey": { origin: 'US', isFromEurope: false },
//   "Robert Lewandowski": { origin: 'Poland', isFromEurope: true },
//   "Lionel Messi": { origin: 'Argentina', isFromEurope: false }
// }

// Answer
const playersOrigin = players.reduce((prevVal, currVal) => {
  const europe = ["Portugal", "France", "Poland"];

  prevVal[currVal.name] = {
    origin: currVal.origin,
    isFromEurope: europe.includes(currVal.origin)
  };

  return prevVal;
}, {});

console.log("playersOrigin :", playersOrigin);
// {
//   'Cristiano Ronaldo': { origin: 'Portugal', isFromEurope: true },
//   'Kylian Mbappe': { origin: 'France', isFromEurope: true },
//   'Clint Dempsey': { origin: 'US', isFromEurope: false },
//   'Robert Lewandowski': { origin: 'Poland', isFromEurope: true },
//   'Lionel Messi': { origin: 'Argentina', isFromEurope: false }
// }
