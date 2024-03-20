let a = {grreting: "Konnichiwa"};
let b;

b = a;
a.grreting = "!Hola";

console.log("b.grreting :", b.grreting); // !Hola

// -----

let c = {grreting: "Guten tag"};
let d;

d = {...c};
c.grreting = "Bonjour";

console.log("d.grreting :", d.grreting); // Guten tag
