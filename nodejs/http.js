// Reference : https://nodejs.dev/learn/the-nodejs-http-module

const http = require("http");

// Lists all the HTTP methods supported:
console.log("HTTP methods : ", http.METHODS);

// Lists all the HTTP status codes and their description:
console.log("HTTP status codes : ", http.STATUS_CODES);
