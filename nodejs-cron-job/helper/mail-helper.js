const config = require('../config/config');

let mailDetails = {
  from: config.mail.transporterAuthUser,
  to: 'joe.doe@gmail.com',
  subject: 'Subscription e-mail',
  text: 'Hi Joe, thanks for subscribing to our service!',
};

module.exports = { mailDetails };
