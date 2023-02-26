const error = new Error("Something went wrong");
console.log(error.message); // Something went wrong

try {
  throw new Error("Sorry, an error happened...");
} catch (error) {
  console.error("Error :", error.message); // Error : Sorry, an error happened...
}
