const express = require("express");
const app = express();

require("dotenv").config();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({
        "message": "Get initial route"
    });
});

app.listen(port, () => {
    console.log(`The app has been launched on port ${port}.`);
});
