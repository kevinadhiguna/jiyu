let container = document.getElementById("ctr");

function getCurrentJustifyContentValue() {
    // Use getComputedStyle() to get a styling value from CSS (source: https://zellwk.com/blog/css-values-in-js/)
    const containerJC = getComputedStyle(container).justifyContent;
    console.log(`Current justify-content value is '${containerJC}'`);
}

function setJustifyContentValue(value) {
    if (value) {
        container.style.justifyContent = value;
    } else {
        console.error("Please provide `justify-content` value...");
    }
}

// Get default container's justify-content value
window.onload = function () {
    getCurrentJustifyContentValue();
}

document.getElementById("btn-start").onclick(() => { 
    setJustifyContentValue("flex-start");
    getCurrentJustifyContentValue();
});

document.getElementById("center").onclick(() => { 
    setJustifyContentValue("center");
    getCurrentJustifyContentValue();
});

document.getElementById("btn-end").onclick(() => { 
    setJustifyContentValue("flex-end");
    getCurrentJustifyContentValue();
});

document.getElementById("btn-space-between").onclick(() => { 
    setJustifyContentValue("space-between");
    getCurrentJustifyContentValue();
});

document.getElementById("btn-space-around").onclick(() => { 
    setJustifyContentValue("space-around");
    getCurrentJustifyContentValue();
});

document.getElementById("btn-space-evenly").onclick(() => { 
    setJustifyContentValue("space-evenly");
    getCurrentJustifyContentValue();
});
