const array = ["Burnes", "Harper", "Tatiis", "Mickey", "Donald"];

console.log(array.copyWithin()); // ["Burnes", "Harper", "Tatiis", "Mickey", "Donald"]

console.log(array.copyWithin(0)); // ["Burnes", "Harper", "Tatiis", "Mickey", "Donald"]
console.log(array.copyWithin(1)); // ["Burnes", "Burnes", "Harper", "Tatiis", "Mickey"]
console.log(array.copyWithin(2)); // ["Burnes", "Burnes", "Burnes", "Burnes", "Harper"]
console.log(array.copyWithin(3)); // ["Burnes", "Burnes", "Burnes", "Burnes", "Burnes"]
console.log(array.copyWithin(4)); // ["Burnes", "Burnes", "Burnes", "Burnes", "Burnes"]

console.log(array.copyWithin(1, 2)); // ["Burnes", "Burnes", "Burnes", "Burnes", "Burnes"]
