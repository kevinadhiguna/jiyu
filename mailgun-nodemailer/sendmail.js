const nodemailer = require("nodemailer");
require("dotenv").config();

const TRANSPORTER_USER =
  process.env.TRANSPORTER_USER ||
  "postmaster@sandboxXXXXXXXXXXXXXXXX.mailgun.org";

const TRANSPORTER_PASS = process.env.TRANSPORTER_PASS || "XXXXXXXXXXXXXXXX";

// send mail with password confirmation
const transporter = nodemailer.createTransport({
  service: "Mailgun",
  auth: {
    user: TRANSPORTER_USER,
    pass: TRANSPORTER_PASS,
  },
});

// One should use a formatted name to avoid landing email to spam. More about formatted name : https://nodemailer.com/message/addresses/.
const MAIL_FROM = "YOURCOMPANY <hello@yourdomain.com>";

const mailOpts = {
  from: MAIL_FROM,
  to: "customer@gmail.com",
  subject: "Hello from mailgun - nodemailer",
  text: "How are you doing ?",
  html: "<b>I hope you find this email well</b>",
};

transporter.sendMail(mailOpts, (err, res) => {
  if (err) {
    console.error("Oops.. something wrong : ", err);
  } else {
    console.log("Message sent !");
  }
});
