const string = "Hello";

const stringToArray = (string) => {
  return Array.from(string);
  // Alternative 1 :
  // return string.split("");
  // Alternative 2 :
  // return [...string];
};

const result = stringToArray(string);
console.log(`[1] Convert '${string}' to an array : ${result}`);
// [1] Convert 'Hello' to an array : H,e,l,l,o
console.log(`[2] Convert '${string}' to an array :`, string.split(""));
// [2] Convert 'Hello' to an array : [ 'H', 'e', 'l', 'l', 'o' ]
