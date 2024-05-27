// Define the redirect function using arrow function syntax
const redirect = () => {
    window.location.href = "http://localhost:5000/index.html";
};

// Add an event listener to the window object for the click event
window.addEventListener("click", redirect);


// function redirect() {
//     window.location = "http://localhost:5000/index.html";
// }

// window.captureEvents(Event.CLICK);
// window.onclick = redirect;
