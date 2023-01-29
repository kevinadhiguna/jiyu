const config = {
  port: process.env.PORT || 5050,
  cron: {
    start: process.env.CRON_START || true,
    timezone: process.env.CRON_TIMEZONE || 'Europe/Madrid',
    debug: process.env.CRON_DEBUG || false,
  },
  mail: {
    transporterService: process.env.MAIL_TRANSPORTER_SERVICE || 'gmail',
    transporterAuthUser: process.env.MAIL_TRANSPORTER_AUTH_USER || 'kai.doe@gmail.com',
    transporterAuthPassword: process.env.MAIL_TRANSPORTER_AUTH_PASSWORD,
  },
};

module.exports = config;
