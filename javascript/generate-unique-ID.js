function generateUniqueID() {
  // -- One by one --
  let date = Date.now(); // 1682848146936
  console.log("date :", date);

  let dateToString = date.toString(36); // lh38c4jc
  console.log("dateToString :", dateToString);

  let mathRandom = Math.random(); // 0.7612768915148231
  console.log("mathRandom :", mathRandom);

  let mathRandomToString = mathRandom.toString(36); // 0.rem4ui95rva
  console.log("mathRandomToString :", mathRandomToString);

  let mathRandomToStringSubstring = mathRandomToString.substring(2); // rem4ui95rva
  console.log("mathRandomToStringSubstring :", mathRandomToStringSubstring);

  let uniqueID = dateToString + mathRandomToStringSubstring; // lh38c4jcrem4ui95rva
  return uniqueID;

  // -- One liner --
  // return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

const id = generateUniqueID();
console.log("id :", id);

// Reference: https://codeshack.io/21-javascript-code-snippets-beginners/#generateuniqueid
