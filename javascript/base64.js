const originalString = "I live in Los Angeles";
console.log("Original String :", originalString, "\n");

// Encode using base64
const encodedString = Buffer.from(originalString, "binary").toString("base64");
console.log("Encoded string :", encodedString);

// Decode using base64
const decodedString = Buffer.from(encodedString, "base64").toString("binary");
console.log("Decoded string :", decodedString);
