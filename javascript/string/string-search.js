/**
 * Reference : https://www.w3schools.com/js/js_string_search.asp
 * 
 * JavaScript has 4 built-in methods for searching strings :
 * 1. String.indexOf()
 * 2. String.lastIndexOf()
 * 3. String.startsWith()
 * 4. String.endsWith()
 * 
 */

let yankees = "LeMahieu, Judge, Stanton";
let the_yankees = yankees.slice();

// ### indexOf() ###
// returns the index of the first occurence of a specified text in a string
let indexOfJudge = the_yankees.indexOf("Judge");
console.log("Index of (Aaron) Judge :", indexOfJudge); // 10
console.log("Is Stanton hitting after Judge ?", the_yankees.indexOf("Stanton") > indexOfJudge ? "Yeah !" : "Nope.."); // Yeah
// receives a second parameter as the starting index of searching
console.log("Index of (Aaron) Judge with a second parameter :", the_yankees.indexOf("Judge", 7), "\n"); // 10

// ### lastIndexOf() ###
let the_yankees_2 = yankees.slice().concat(", Judge");
console.log("The yankees 2 :", the_yankees_2); // LeMahieu, Judge, Stanton, Judge
// returns the index of the last occurence of a specified text
console.log("Last index of (Aaron) Judge :", the_yankees_2.lastIndexOf("Judge")); // 26
// Searches backward
console.log("Last index of (Aaron) Judge with a second parameter :", the_yankees.lastIndexOf("Judge", 7), "\n"); // -1 (Not found because it searches from index 7 to 0 while "Judge" is at 10)

// NOTE : Both indexOf() and lastIndexOf() return -1 if the text is not found.
console.log("Index of (Shohei) Ohtani in the Yankees :", the_yankees.indexOf("Ohtani")); // -1
console.log("Index of (Carlos) Correa in the Yankees :", the_yankees.lastIndexOf("Correa"), "\n"); // -1

// ### search() ###
// search a value within a string and returns its index
console.log("Search LeMahieu in the Yankees :", the_yankees.search("LeMahieu"), "\n"); // 0

/**
 * Difference between search() and indexOf() :
 * 
 * - search() can not take a second parameter
 * - indexOf() is not able to search specific value (can not involve Regular Expression)
 * 
 */

// ### match() ###
// searches a string that matches a RegEx and then returns an array
console.log("Match method in the Yankees :", the_yankees.match("LeMahieu"));
// [
//   'LeMahieu',
//   index: 0,
//   input: 'LeMahieu, Judge, Stanton',
//   groups: undefined
// ]

// Actually for the cases below, the includes method is more suited...
console.log("Does Stanton still play for the Yankees ?", the_yankees.match(/stanton/i)[0] ? "Yep" : "No.."); // Yep
console.log("Does Judge still play for the Yankees ?", the_yankees.match(/Judge/g)[0] ? "Indeed" : "Nope"); // Indeed
console.log("Does LeMahieu still play for the Yankees ?", the_yankees.match(/lemahieu/gi)[0] ? "Definitely" : "Nah", "\n"); // Definitely

// ### includes() ###
// Warning (Browser Support) : the includes method is not supported in the Internet Explorer...
// returns true if a string contains a specific value
console.log("Includes method (LeMahieu in the Yankees) :", the_yankees.includes("LeMahieu")); // true
console.log("Is Stanton still at the bronx ?", the_yankees.includes("Stanton") ? "Absolutely" : "Not anymore.."); // Absolutely
// able to determine a starting search position with the help of a second parameter
console.log("Search 'Judge' in includes method from index 5 :", the_yankees.includes("Judge", 5), "\n"); // true (Judge is at 10)
