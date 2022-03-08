let word = "tomato";

// Original word
console.log("Original word :", word); // Original word : tomato

// Convert the word into an array consisting of each character
word_arr = word.split("");
console.log("Now, let's convert the word into an array :", word_arr); // Now, let's convert the word into an array : [ 't', 'o', 'm', 'a', 't', 'o' ]

let reversed_word_arr = [];
for (let i = 0; i < word.length; i++) {
  reversed_word_arr.push(word_arr.pop([i]));
}
console.log("Array of the reversed word :", reversed_word_arr); // Array of the reversed word : [ 'o', 't', 'a', 'm', 'o', 't' ]

let reversed_word = reversed_word_arr.join("");
console.log("Reversed Word :", reversed_word); // Reversed Word : otamot

console.log("\n[ RESULT ]");
word === reversed_word
  ? console.log(`${word} is palindrome !`)
  : console.log(`${word} is NOT palindrome...`);
// tomato is NOT palindrome...
