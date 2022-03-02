// This method is rapid but limited. In addition, the order of property matters. For more : https://stackoverflow.com/a/1144249.
function areObjectsSame(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2) ? "same" : "different";
}

const henderson = {
    id: "5gf44",
    name: "Liam Henderson",
};

const hader = {
    id: "6gf46",
    name: "Josh Hader",
};

console.log("Stringified object 1 :", JSON.stringify(henderson));
// OUTPUT
// Stringified object 1 : {"id":"5gf44","name":"Liam Henderson"}

console.log("Stringified object 2 :", JSON.stringify(hader));
// OUTPUT
// Stringified object 2 : {"id":"6gf46","name":"Josh Hader"}

console.log(
    "Object 1 and Object 2 are ",
    areObjectsSame(henderson, hader),
    "objects."
);
// OUTPUT
// Object 1 and Object 2 are  different objects.
