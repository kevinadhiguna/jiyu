const { mailDetails } = require('./helper/mail-helper');

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

  mail: {
    sendSubscriptionMail: function () {
      let mailTransporter = nodemailer.createTransport({
        service: config.mail.transporterService,
        auth: {
          user: config.mail.transporterAuthUser,
          pass: config.mail.transporterAuthPassword,
        },
      });

      // To-do: move mailTransporter.sendMail() to mail-helper.js, if possible
      mailTransporter.sendMail(mailDetails, function (err) {
        if (err) {
          console.log(`Something went wrong ${err}`);
        } else {
          console.log('Email sent succesfully');
        }
      });
    }
  },
};

module.exports = tasks;
