// this.is.a.name.with.dots@gmail.com to thisisanamewithdots
const email = "this.is.a.name.with.dots@gmail.com";

const getName = email => {
  const namePart = email.split("@");

  // (1) one by one
  if (namePart.length === 2) {
    let name = namePart[0];
    // name = name.replaceAll(".", "");
    name = name.replace(/\./g, '')
    return name;
  }

  // (2) one-liner
  // if (namePart.length === 2) return namePart[0].replace(/\./g, '');
}

console.log("email name from", `'${email}'`, ":", getName(email));
