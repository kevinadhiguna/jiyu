const { Blob } = require("buffer"); // <- To solve 'ReferenceError: byteSize is not defined' error

function getByteSize(str) {
  return new Blob([str]).size;
}

console.log("Byte size of 😀 :", getByteSize("😀")); // 4
console.log("Byte size of 'Hi, have a wonderful day!' :", getByteSize("Hi, have a wonderful day!")); // 25

// References:
// - https://morioh.com/p/a76bc7d72226
// - https://bobbyhadz.com/blog/javascript-referenceerror-blob-is-not-defined
