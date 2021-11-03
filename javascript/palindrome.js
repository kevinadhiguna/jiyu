let word = "tomato";

// Original word
console.log("Original word :", word);

// Convert the word into an array consisting of each character
word_arr = word.split("");
console.log("Now, let's convert the word into an array :", word_arr);

let reversed_word_arr = [];

for (let i = 0; i < word.length; i++) {
    reversed_word_arr.push(word_arr.pop([i]));
}

console.log("Array of the reversed word :", reversed_word_arr);

let reversed_word = reversed_word_arr.join("");
console.log("Reversed Word :", reversed_word);

console.log("\n[ RESULT ]");
word === reversed_word
    ? console.log("The word is palindrome !")
    : console.log("The word is NOT palindrome...");
