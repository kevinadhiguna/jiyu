const originalString = "I live in Los Angeles";
console.log("Original String :", originalString, "\n"); // Original String : I live in Los Angeles 

// Encode using base64
const encodedString = Buffer.from(originalString, "binary").toString("base64");
console.log("Encoded string :", encodedString); // Encoded string : SSBsaXZlIGluIExvcyBBbmdlbGVz

// Decode using base64
const decodedString = Buffer.from(encodedString, "base64").toString("binary");
console.log("Decoded string :", decodedString); // Decoded string : I live in Los Angeles
