const email = "748djsdjk3849s@myhomepage.com";

// -- One-liner --
// const getName = email => email.split("@")[0];

// -- With safety check --
// (1) :
// const getName = email => {
//   let emailName = email.split("@");  
//   const name = (emailName.length === 2) ? emailName[0] : null;
//   return name;
// }

// (2) :
const getName = email => {
  let emailName = email.split("@");

  if (emailName.length === 2) {
    const name = emailName[0];
    return name;
  } else {
    console.log("Email address seems to be invalid...");
  }  
}

console.log("email name : ", getName(email));
