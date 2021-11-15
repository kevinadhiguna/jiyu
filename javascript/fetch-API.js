// Note : Make sure your package.json includes a line for “type”: “module”, Without this line node assumes you want to use Common JS modules rather than ESM.
// import fetch from "node-fetch-commonjs"; // <- The fetch API is not implemented in NodeJS. Thus, one is required to use an external module called 'node-fetch' (Source: https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined).

const fetch = require("node-fetch-commonjs");

/**
 * JSONPlaceholder comes with a set of 6 common resources:
 *
 * /posts 	100 posts
 * /comments 	500 comments
 * /albums 	100 albums
 * /photos 	5000 photos
 * /todos 	200 todos
 * /users 	10 users
 *
 * Resources : https://jsonplaceholder.typicode.com/
 * Guide : https://jsonplaceholder.typicode.com/guide/
 */

async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await res.json();
    console.log(data);
}

fetchUsers();
