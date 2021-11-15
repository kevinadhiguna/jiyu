require("dotenv").config();

const port = process.env.PORT;
const allowedOrigins = process.env.ALLOWED_ORIGINS;

console.log(port); // 8000

// (incorrect) All origins combined in one single string
console.log(allowedOrigins.split()); // ['http://localhost:8080,http://localhost:3000,https://mywebsite.com,https://order.example.com,https://inter.net']

// (incorrect) Each char in all strings is splitted
console.log(allowedOrigins.split("")); // ['h', 't', 't', 'p', ':', '/', '/', 'l', 'o', 'c', 'a', 'l','h', 'o', 's', 't', ':', '8', '0', '8', '0', ',', 'h', 't','t', 'p', ':', '/', '/', 'l', 'o', 'c', 'a', 'l', 'h', 'o','s', 't', ':', '3', '0', '0', '0', ',', 'h', 't', 't', 'p','s', ':', '/', '/', 'm', 'y', 'w', 'e', 'b', 's', 'i', 't','e', '.', 'c', 'o', 'm', ',', 'h', 't', 't', 'p', 's', ':','/', '/', 'o', 'r', 'd', 'e', 'r', '.', 'e', 'x', 'a', 'm','p', 'l', 'e', '.', 'c', 'o', 'm', ',', 'h', 't', 't', 'p','s', ':', '/', '/',... 9 more items]

// (correct) Each string is splitted.
console.log(allowedOrigins.split(",")); // ["http://localhost:8080","http://localhost:3000","https://mywebsite.com","https://order.example.com","https://inter.net"]
