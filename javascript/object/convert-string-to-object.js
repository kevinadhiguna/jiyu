const invalidObject1 = "{\"status\":\"success\",\"status_code\":200,\"message\":\"OK\",\"error\":\"false\"}";
const validObject1 = JSON.parse(invalidObject1);

// Pay attention to : \"h43gew\"
const invalidObject2 = "{\"status\":\"success\",\"h43gew\":200,\"message\":\"OK\",\"error\":\"false\"}";
const validObject2 = JSON.parse(invalidObject2);

// Pay attention to : \"h43@g#e!w\"
const invalidObject3 = "{\"status\":\"success\",\"h43@g#e!w\":200,\"message\":\"OK\",\"error\":\"false\"}";
const validObject3 = JSON.parse(invalidObject3);

console.log("Invalid object 1 : ", invalidObject1);
console.log("----------");
console.log("Valid object 1 : ", validObject1, "\n");

console.log("Invalid object 2 : ", invalidObject2);
console.log("----------");
console.log("Valid object 2 : ", validObject2, "\n"); // The \"h43gew\" property will not have quotes ('') or ("")

console.log("Invalid object 3 : ", invalidObject3);
console.log("----------");
console.log("Valid object 3 : ", validObject3, "\n"); // The \"h43@g#e!w\" property will still be a string
