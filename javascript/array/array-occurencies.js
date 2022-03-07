const countFrequencies = (arr) =>
  arr.reduce((a, v) => {
    a[v] = a[v] ? a[v] + 1 : 1;
    return a;
  }, {});

let lettersArray = ["g", "z", "d", "a", "i", "j", "k", "m", "a", "i"];
console.log(countFrequencies(lettersArray));
