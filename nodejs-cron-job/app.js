const express = require('express');
require('dotenv').config();

const { config } = require('./config/config');
const cron = require('./helper/cron-helper');
const tasks = require('./tasks');

const app = express();

/* A cron job interval:

 "* * * * * *"
  | | | | | |
  | | | | | |
  | | | | | day of week -> 0 - 7  or names, 0 and 7 refer to sunday
  | | | | month         -> 1 - 12 or names
  | | | day of month    -> 1 - 31
  | | hour              -> 0 - 23
  | minute              -> 0 - 59
  second(optional)      -> 0 - 59

*/

cron.addJob('Run a task every second', '* * * * *', tasks.everySecond);

const port = config.port || 5050;

app.start(() => {
  console.log(`App is running on port ${port}`);
});
