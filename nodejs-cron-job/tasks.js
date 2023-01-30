const tasks = {
  everySecond: function () {
    console.log('==========');
    console.log('A cron job that runs every second');
    console.log('==========');
  },

  certainDates: function () {
    console.log('==========');
    console.log('A cron job that runs on 3th and 17th at 23:59 every month');
    console.log('==========');
  },

  every20minutes: function () {
    console.log('==========');
    console.log('A cron job that runs every 20 minutes');
    console.log('==========');
  },
};

module.exports = tasks;
