// Reference : https://blog.logrocket.com/how-to-implement-a-health-check-in-node-js/
const healthcheck = () => {
  const healthyData = {
    message: 'ok',
    uptime: process.uptime(),
    responseTime: process.hrtime(),
    timestamp: Date.now(),
  }

  try {
    res.status(200).json({ healthyData });
  } catch (error) {
    res.status(503).json({ message: 'Something went wrong : ', error });
  }
}

module.exports = { healthcheck };
