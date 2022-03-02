/**
 * [Question] What will JavaScript display in order ?
 */

// Note : Make sure your package.json includes a line for “type”: “module”, Without this line node assumes you want to use Common JS modules rather than ESM.
// import fetch from "node-fetch-commonjs"; // <- The fetch API is not implemented in NodeJS. Thus, one is required to use an external module called 'node-fetch' (Source: https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined).

const fetch = require("node-fetch-commonjs");

console.log("aaa");

fetch("https://catfact.ninja/fact")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log("bbb");
  });

console.log("ccc");

/**
 * [Answer]
 *
 * aaa
 * ccc
 * {
 *   fact: 'Approximately 1/3 of cat owners think their pets are able to read their minds.',
 *   length: 78
 * }
 * bbb
 *
 * JavaScript runs asynchronously. That means while fetching the data from API, it runs the latest line of console.log then executes the lines inside the fetch block.
 *
 */
