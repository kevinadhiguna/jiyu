// const fetch = require("node-fetch"); // <- node-fetch was converted to be a ESM only package - you are not able to import it with require (https://stackoverflow.com/a/69331469)

// Alternatives :
// (1)
// import fetch from "node-fetch"; // <- One must set "type": "module" in package.json.  
// (2)
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args)); // <- See https://stackoverflow.com/a/69331469

const postUrl = "https://jsonplaceholder.typicode.com/todos";
const patchUrl = "https://jsonplaceholder.typicode.com/posts/1";

let todo = {
  userId: 123,
  title: "lorem ipsum",
  completed: false,
};

fetch(postUrl, {
  method: "POST",
  body: JSON.stringify(todo),
  header: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((json) => console.log("Response in JSON (POST) : ", json))
  .catch((err) => console.error("Error : ", err));

console.log("todo : ", todo);

fetch(patchUrl, {
  method: "PATCH",
  body: JSON.stringify(todo),
  header: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((json) => console.log("Response in JSON (PATCH) : ", json))
  .catch((err) => console.error("Error : ", err));

console.log("JSON.stringify(todo) : ", JSON.stringify(todo));
