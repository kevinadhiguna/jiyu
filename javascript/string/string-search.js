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

// ### indexOf ###
// returns the index of the first occurence of a specified text in a string
console.log("Index of (Aaron) Judge :", the_yankees.indexOf("Judge")); // 10
