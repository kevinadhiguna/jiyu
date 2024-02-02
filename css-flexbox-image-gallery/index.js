let container = document.getElementById("ctr");

function getCurrentJustifyContentValue() {
    // Use getComputedStyle() to get a styling value from CSS (source: https://zellwk.com/blog/css-values-in-js/)
    const containerJC = getComputedStyle(container).justifyContent;
    console.log(`Current justify-content value is '${containerJC}'`);
}

// Get default container's justify-content value
window.onload = function () {
    getCurrentJustifyContentValue();
}

const startButton = document.getElementById("btn-start");
startButton.onclick = function() {
    container.style.justifyContent = "flex-start";
    getCurrentJustifyContentValue();
}

const centerButton = document.getElementById("btn-center");
centerButton.onclick = function() {
    container.style.justifyContent = "center";
    getCurrentJustifyContentValue();
}

const endButton = document.getElementById("btn-end");
endButton.onclick = function() {
    container.style.justifyContent = "flex-end";
    getCurrentJustifyContentValue();
}

const spaceAroundButton = document.getElementById("btn-space-around");
spaceAroundButton.onclick = function() {
    container.style.justifyContent = "space-around";
    getCurrentJustifyContentValue();
}

const spaceEvenlyButton = document.getElementById("btn-space-evenly");
spaceEvenlyButton.onclick = function() {
    container.style.justifyContent = "space-evenly";
    getCurrentJustifyContentValue();
}

const spaceBetweenButton = document.getElementById("btn-space-between");
spaceBetweenButton.onclick = function() {
    container.style.justifyContent = "space-between";
    getCurrentJustifyContentValue();
}
