// This code only works in a browser and does not work in NodeJS since the window object comes from browsers' API.

let userStatus = navigator.onLine ? "online" : "offline";
// You can also do :
// let userStatus = window.navigator.onLine ? "online" : "offline";

console.log("Currently the user is", userStatus);

// == JavaScript Event listener ==
// If a user is online :
window.addEventListener("online", () => {
    console.log("User is online !");
});
// If a user is offline :
window.addEventListener("offline", () => {
    console.log("User is offline...");
});
