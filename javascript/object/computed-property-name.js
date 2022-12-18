// Reference: https://eloquentcode.com/computed-property-names-in-javascript

// Computed Property Name allows the object properties in object to be determined dynamically (read: variable values)
const nickName = "zayech";
const lastName = "amrabat";
const firstName = "Mount";
const fieldNumber = 11;
const thing = "Students";

const obj = {
  // Static names:
  date: "25/11/2016",
  alvarez: 5,
  mary: 7,
  // Computed property names:
  [nickName]: 5,
  ['kai' + firstName]: 11,
  [`${lastName}`]: 14,
  [`total${thing}Values`]: 42
};

console.log(obj);
// {
//   date: '25/11/2016',
//   alvarez: 5,
//   mary: 7,
//   zayech: 5,
//   kaiMount: 11,
//   amrabat: 14,
//   totalStudentsValues: 42
// }
