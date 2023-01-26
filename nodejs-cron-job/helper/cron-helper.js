const CronJob = require('cron').CronJob;
const	{ config } = require('../config/config');

const cron = {
  // settings: config,
  jobs: [],
  init: function () {
    for (let i = 0; i < cron.jobs.length; i++) {
      let cronJob = cron.jobs[i];
      cron.addJob(cronJob.name, cronJob.interval, cronJob.fn, cronJob.debug);
    }
    cron.listJobs();
  },
  addJob: function (name, interval, fn, debug) {
    let cronConfig = config.cron;

    // -- Adding required and optional properties --
    cronConfig.cronTime = interval;
    cronConfig.onTick = fn;
    debug = debug || cronConfig.debug;

    try {
      new CronJob(cronConfig);
      let cronTask = {
        name,
        startTime: new Date(),
        interval,
      };
      cron.jobs.push(cronTask);

      if (debug) {
        console.log(`New cron task created : ${cronTask} \n`);
      }
    } catch (error) {
      console.log(`Something went wrong while executing a cron job : ${error}`);
    }
  },
  listJobs: function () {
    let list = cron.jobs;
    return list;
  },
};

module.exports = cron;
