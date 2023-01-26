const express = require('express');
require('dotenv').config();

const { config } = require('./config/config');
const cron = require('./helper/cron-helper');
const tasks = require('./tasks');

const app = express();

cron.addJob('Run a task every second', '* * * * *', tasks.everySecond);

const port = config.port || 5050;

app.start(() => {
  console.log(`App is running on port ${port}`);
});
