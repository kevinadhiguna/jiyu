/**
 * -- Background Problem --
 * Let's say one has a code like the following :
 * 
 * if(!response.employeeName) {
 *   console.log("employee name is empty");
 * }
 * 
 * Why is it "  if(!response.employeeName) { ... }                " instead of :
 *           "  if(response.employeeName === '') { ... }          "
 *           "  if(response.employeeName === null) { ... }        "
 *           "  if(typeof response.employeeName === 'undefined')  "
 * ?
 */
let nullVar = null;
let stringVar = '';
let booleanVar = false;
let undefinedVar = undefined;

console.log("nullVar :", nullVar); // null
console.log("!nullVar :", !nullVar); // true

console.log("stringVar :", stringVar); // ''
console.log("!stringVar :", !stringVar); // true

console.log("booleanVar :", booleanVar); // false
console.log("!booleanVar :", !booleanVar); // true

console.log("undefinedVar :", undefinedVar); // undefined
console.log("!undefinedVar :", !undefinedVar); // true

/**
 * -- Temporary Conclusion --
 * 
 * By that, "  if (!response.employeeName) { ... }  " is possibly the most concise one
 * 
 * (feel free to correct me if I am wrong, thanks!)
 * 
 */

// References:
// - https://tutorial.tips/exclamation-mark-before-a-variable-in-javascript/
// - https://teamtreehouse.com/community/what-does-the-means-if-its-before-a-variable
