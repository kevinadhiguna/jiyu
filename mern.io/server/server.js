const express = require("express");

console.log("Hello World!");

express.listen(5000, () => {
    console.log("The app has been launched on port 5000.");
})
