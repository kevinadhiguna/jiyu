// This won't work : let quote = "It's "Sho" time";
let quote = "Quote : It's \"Sho\" time"; // Output : It's "Sho" time

// This won't work : let text = 'It's \"Sho\" time';
let text = 'Text : It\'s \"Sho\" time'; // Output : It's "Sho" time

// Show a backslash in a string
let char = "This char \\ is called backslash"; // Output : This char \ is called backslash

console.log("Quote :", quote);
console.log("Text :", text);
console.log("Char :", char);
