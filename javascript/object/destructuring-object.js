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

// -----

let friend = {
  firstName: 'John',
  lastName: 'Doe',
  middleName: 'L.',
  currentAge: 28,
};

let { firstName, lastName, middleName = '', nickName = 'JD', currentAge: age = 18 } = friend;
console.log("middleName :", middleName); // 'L.'
console.log("nickName :", nickName); // 'JD'
console.log("age :", age); // 28

// Notice that age is equal to 28 even though it is initiated as 18

// -----

let nestedObj = {
  id: 505,
  amigo: {
    address: "prosperity street",
    email: "randomjoe@nestedobj.com",
  },
};

let { id, amigo: { address, email } } = nestedObj;

console.log("address :", address); // prosperity street
console.log("email :", email); // randomjoe@nestedobj.com
