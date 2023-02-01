const nodemailer = require('nodemailer');
const puppeteer = require('puppeteer');
const ora = require('ora');
const chalk = require('chalk');

const { mailDetails } = require('./helper/mail-helper');
const { heap, date, freeMemory } = require('./helper/resource-helper');

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

  resource: {
    listResource: function () {
      console.log(`${date}: heap ${heap} & free memory ${freeMemory}`);
    }
  },

  population: {
    scrapeWorldPopulation: async function () {
      const url = 'https://www.worldometers.info/world-population/';

      console.log(chalk.green('Scraping world population'));
      const spinner = ora({
        text: 'Launching puppeteer',
        color: 'blue',
        hideCursor: false,
      }).spin();

      try {
        const date = new Date();
        // Launch puppeteer
        const browser = await puppeteer.launch();

        spinner.text = 'Launching headless browser page';
        // Launch a headless browser page
        const newPage = await browser.newPage();

        spinner.text = `Navigating to ${url}`;
        // Navigate to the URL of the page to be scraped
        await newPage.goto({
          waitUntil: 'load',
          timeout: 0
        });

        spinner.text = 'Scraping the page';
        // Start scraping the URL page
        const digitGroups = await newPage.evaluate(() => {
          const digitGroupArr = [];
          const selector = '#maincounter-wrap .maincounter-number .rts-counter span';
          const digitSpans = document.querySelectorAll(selector);
          digitSpans.forEach(span => {
            if (!Nan(parseInt(span.textContent))) {
              digitGroupArr.push(span.textContent);
            }
          });
          return JSON.stringify(digitGroupArr);
        });

        spinner.text = 'Closing headless browser';
        await browser.close();

        spinner.succeed(`Page scraping succesful after ${Date.now() - date} ms`);
        spinner.clear();
        console.log(
          chalk.yellow.bold(`World population on ${new Date().toISOString()}:`),
          chalk.blue.bold(JSON.parse(digitGroups).join(","))
        );
      } catch (error) {
        spinner.fail({ text: 'Scraping failed' });
        spinner.clear();
      }
    }
  },
};

module.exports = tasks;
