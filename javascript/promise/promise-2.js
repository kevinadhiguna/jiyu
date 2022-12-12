const promise1 = Promise.resolve("Promise 1 resolved");
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 2000);
});

Promise.all([promise1, promise2])
  .then(response => {
    console.log("\n");
    console.log("-- Promise all --");
    console.log(response); // After 2 seconds: [ 'Promise 1 resolved', 'Promise 2 resolved' ]
    console.log("-- All promises resolved --");
  })
  .catch(err => {
    console.log("\n");
    console.log("Something went wrong...");
    console.log(err.message);
  });

Promise.race([promise1, promise2])
  .then(response => {
    console.log("-- Promise race --");
    console.log(response); // Promise 1 resolved
    console.log("-- Promise race finished --");
  })
  .catch(err => {
    console.log("Something went wrong...");
    console.log(err.message);
  });

// Output of this program:
// -- Promise race --
// Promise 1 resolved
// -- Promise race finished --
//
//
// -- Promise all --
// [ 'Promise 1 resolved', 'Promise 2 resolved' ]
// -- All promises resolved --
