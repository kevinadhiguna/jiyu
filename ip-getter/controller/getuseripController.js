const getUserIp = (req, res) => {
  try {
    let ip =
      (req.headers["x-forwarded-for"] || "").split(",").pop().trim() ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.scoket.remoteAddress;
    res.status(200).send(`{ IP address: ${ip} }`);
  } catch (errorGettingUserIp) {
    res.status(500).send(errorGettingUserIp);
    throw new Error("Something wrong, please try again later..");
  }
};

module.exports = getUserIp;
