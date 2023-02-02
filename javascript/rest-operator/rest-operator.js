// -- Inside function's parameter --
function summon(greeting1, greeting2, ...rest) {
  console.log("greeting1 :", greeting1); // hi
  console.log("greeting2 :", greeting2); // hola

  console.log("rest :", rest); // [ 'konnichiwa', 'namaste' ]
  console.log("typeof rest :", typeof rest); // object
  console.log("Array.isArray(rest) :", Array.isArray(rest)); // true
}

summon("hi", "hola", "konnichiwa", "namaste");

// -- Outside of a function --
const { spain, england, ...otherNations } = {
  spain: "FC Barcha",
  england: "Manshine City",
  italy: "Ubers",
  france: "PXG",
  germany: "Bascard Munchen"
};

console.log("otherNations :", otherNations); // { italy: 'Ubers', france: 'PXG', germany: 'Bascard Munchen' }
