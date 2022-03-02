const http = require("http");
// Load environment variables
require("dotenv").config();

const server = http.createServer((req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end(`Hi, you came from ${ip}\n`);
});

const hostname = process.argv[2] || null;

const port = process.env.PORT || 8050;

server.listen(port, hostname, (err) => {
  if (err) {
    return console.log("Error occured :", err);
  }

  console.log("Listening to", hostname);
});
