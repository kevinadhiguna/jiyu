const express = require("express");
const app = express();

require("dotenv").config();

app.get('/', (req, res) => {
    res.send("Hello World !");
});

app.listen(5000, () => {
    console.log("The app has been launched on port 5000.");
})
