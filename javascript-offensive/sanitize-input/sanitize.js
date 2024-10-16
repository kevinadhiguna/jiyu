const userInput1 = "<script>Hello there!</script>";
const userInput2 = "Sup! How are you doing?";

const sanitizedInput1 = userInput1.replace(/.*?<\/script>/gi, '');
const sanitizedInput2 = userInput2.replace(/.*?<\/script>/gi, '');

console.log("user input 1 :", userInput1);
// Output: <script>Hello there!</script>
console.log("Sanitized user input 1 :", sanitizedInput1);
// Output: 

console.log("user input 2 :", userInput2);
// Output: Sup! How are you doing?
console.log("Sanitized user input 2 :", sanitizedInput2);
// Output: Sup! How are you doing?
