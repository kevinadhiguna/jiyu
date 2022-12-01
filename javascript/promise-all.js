const fetch = require("node-fetch");

const url1 = "https://yesno.wtf/api";
const url2 = "https://jsonplaceholder.typicode.com/todos/1";

(async () => {
  const promises = [
    fetch(url1),
    fetch(url2)
  ];
  
  let response = await Promise.all(promises);
  
  // -- DO NOT directly convert to JSON ! --
  // const results = await response.json(); // UnhandledPromiseRejectionWarning: TypeError: response.json is not a function
  // console.log("results : ", results); // UnhandledPromiseRejectionWarning: Unhandled promise rejection.
  
  // Obtain raw response (not really in desired form...)
  // console.log("response[0] : ", response[0]);
  // console.log("response[1] : ", response[1]);

  // Convert to JSON
  const result0 = await response[0].json();
  const result1 = await response[1].json();

  console.log("result0 : ", result0);
  // Output:
  // result0 :  {
  //   answer: 'yes',
  //   forced: false,
  //   image: 'https://yesno.wtf/assets/yes/11-a23cbde4ae018bbda812d2d8b2b8fc6c.gif'
  // }

  console.log("result1 : ", result1);
  // Output:
  // result1 :  { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
  
  // This failed somehow...
  // for (let i = 0; i < response.length; i++) {
  //   let res = await response[i].json();
  //   response.push(res);
  // }
  // console.log("response (from for loop) : ", response);

  console.log("-- Finished all promises --");
})();
