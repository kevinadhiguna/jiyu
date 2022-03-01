const string = "Hello";

const stringToArray = (string) => {
  return Array.from(string);
  // Alternative 1 :
  // return string.split("");
  // Alternative 2 :
  // return [...string];
};

const result = stringToArray(string);
console.log(`Convert a string '${string}' to an asrray : ${result}`);
