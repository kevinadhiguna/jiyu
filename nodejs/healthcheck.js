// Source : https://medium.com/sfl-newsroom/nodejs-health-checks-and-overload-protection-368a132a725e

const express = require('express');
const app = express();

require("dotenv").config();

app.get('/', (req, res) => {
    res.end(`Hello PID: ${process.pid}`);
});

let status = 200;
setTimeout(() => {
    status = 503;
    console.log('Status changed to 503');
}, 20000);
app.get('/check', (req, res) => {
    console.log(`Health Check Request ${status}`);
    res.status(status).end();
});

app.listen(process.env.PORT);
console.log(`Api Server running on ${process.env.PORT} port, PID: ${process.pid}`);
