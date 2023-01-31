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

// Use single integer values to populate a chron expression
cron.addJob('Run a task on 3rd and 17th at 23:59 every month', '59 23 3,17 * *', tasks.certainDates);

// Use step values to populate a chron expression
cron.addJob('Run a task every 20 minutes', '*/20 * * * * *', tasks.every20minutes);

cron.addJob('Send an email on 1st and 25th every month', '0 8 1,25 * *', tasks.mail.sendSubscriptionMail);

cron.addJob('List resource at 23:59 every day', '59 23 * * * *', tasks.resource.listResource);

const port = config.port || 5050;

app.start(() => {
  console.log(`App is running on port ${port}`);
});
