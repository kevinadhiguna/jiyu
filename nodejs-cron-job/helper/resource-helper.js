const process = require('process');
const os = require('os');

let heap = process.memoryUsage().heapUsed / 1024/ 1024;
let date = new Date().toISOString();
const freeMemory = `${Math.round((os.freemem() * 100) / os.totalmem())} %`;

module.exports = { heap, date, freeMemory };
