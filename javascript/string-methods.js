/**
 * There are 3 methods for extracting a part of a string in JavaScript:
 * 
 * 1. slice(start, end)
 * 2. substring(start, end)
 * 3. substr(start, length)
 * 
 * Source : https://www.w3schools.com/js/js_string_methods.asp
 */

let the_angels = "Ohtani, Trout, Rendon";

// console.log("Slice :", the_angels.slice()); will copy all string which will give output : Ohtani, Trout, Rendon

// Copy the string so original string won't be modified
let the_angels_2 = the_angels.slice();

// ### slice ###
// Slice extracts a part of a string then return it as a new string
console.log("Slice 0-6 :", the_angels_2.slice(0, 6)); // Ohtani
console.log("Slice 8-13 :", the_angels_2.slice(8, 13)); // Trout
console.log("Slice from 8 :", the_angels_2.slice(8)); // Trout, Rendon
// A negative index means it is counted from behind
console.log("Slice from behind :", the_angels_2.slice(-6), "\n"); // Rendon


// ### substring ###
// Substring is similar to Slice but can not accept negative indexes
console.log("Substring 0-6 :", the_angels_2.substring(0, 6)); // Ohtani
console.log("Substring 8-13 :", the_angels_2.substring(8, 13)); // Trout
console.log("Substring from 8 :", the_angels_2.substring(8)); // Trout, Rendon
// Substring does not accept a negative index. Thus, if one does so, it returns a whole string without modifying it.
console.log("Substring from behind :", the_angels_2.substring(-6), "\n"); // Ohtani, Trout, Rendon


// ### substr ###
// Substr is similar to Slice but the second parameter indicates the length of the extracted part
console.log("Substr 0-6 :", the_angels_2.substr(0, 6)); // Ohtani
console.log("Substr 8-13 :", the_angels_2.substr(8, 13)); // Trout, Rendon
// If the second param is unavailable, it will return an extracted string from the first index to the rest of string.
console.log("Substr from 8 :", the_angels_2.substr(8)); // Trout, Rendon
// If the first param is ngeative, it counts from the end of the string
console.log("Substr from behind :", the_angels_2.substr(-6), "\n"); // Rendon


// ### replace ###
console.log("Replace :", the_angels_2.replace("Rendon", "Walsh")); // Ohtani, Trout, Walsh
// Replace method is case-sensitive. To prevent it, use an /i flag.
console.log("Replace case-sensitive :", the_angels_2.replace(/TROUT/i, "Upton")); // Ohtani, Upton, Rendon
// To replace all matches, use /g (global) flag as by default, replace method only replaces the first match.
console.log("Replace all matches :", the_angels_2.replace(/Ohtani/g, "Fletcher"), "\n"); // Fletcher, Trout, Rendon


// ### toUpperCase ###
let manager = "Joe Maddon";
console.log("toUpperCase :", manager.toUpperCase(), "\n");


// ### toLowerCase ###
let hitting_coach = "Bruce Hines";
console.log("toLowerCase :", hitting_coach.toLowerCase(), "\n");


// ### concat ###
let firstname = "Raisel";
let lastname = "Iglesias"
console.log("Concat strings :", firstname.concat(" ", lastname), "\n");
// This also works but not concat method : console.log("Concat strings :", firstname, lastname);

// ### trim ###
let rookies = " Marsh, Adel, Detmers   ";
// Warning : trim only removes whitespaces before the first char and after the last char in a string. With that being said, whitespaces between chars will not be removed.
console.log("Trim to remove whitespaces :", rookies.trim(), "\n"); // Marsh, Adel, Detmers

// ### padStart & padEnd ###
let number_of_starting_pitchers = "5";
console.log("padStart method :", number_of_starting_pitchers.padStart(4, 0)); // 0005
console.log("padEnd method :", number_of_starting_pitchers.padEnd(4, 0)); // 5000
