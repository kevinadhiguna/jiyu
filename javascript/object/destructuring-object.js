let person = {
  firstname: "arkham",
  lastname: "asylum"
};

// Before ES6:
let firstname_beforeES6 = person.firstname;
let lastname_beforeES6 = person.lastname;
console.log("firstname_beforeES6 :", firstname_beforeES6); // arkham
console.log("lastname_beforeES6 :", lastname_beforeES6); // asylum

// Prior to ES6:
// Syntax: 
// let { property1: variable1, property2: variable2 } = object;

let { firstname: firstname_afterES6, lastname: lastname_afterES6 } = person;
console.log("firstname_afterES6 :", firstname_afterES6); // arkham
console.log("lastname_afterES6 :", lastname_afterES6); // asylum

// if property and variable names are same
let { firstname, lastname } = person;
console.log("firstname :", firstname); // arkham
console.log("lastname :", lastname); // asylum

// -----

let club = {
  spain: "real madrid",
  italy: "juventus fc",
};

let { spain, germany, italy } = club;
console.log("spain :", spain); // real madrid
console.log("germany :", germany); // undefined
console.log("italy :", italy); // juventus fc
