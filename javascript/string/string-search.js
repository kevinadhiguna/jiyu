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
console.log("Index of (Aaron) Judge :", the_yankees.indexOf("Judge")); // 10

// ### lastIndexOf() ###
let the_yankees_2 = yankees.slice().concat(", Judge");
console.log("The yankees 2 :", the_yankees_2);
// returns the index of the last occurence of a specified text
console.log("Last index of (Aaron) Judge :", the_yankees_2.lastIndexOf("Judge")); // 26
