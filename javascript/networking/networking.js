const http = require("http");
// Load environment variables
require("dotenv").config();

const server = http.createServer((req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end(`Hi, you came from ${ip}\n`);
});

// Determine hostname/host and port 
const PORT = process.env.PORT || 8050;
const HOSTNAME = process.argv[2] || null;

server.listen(PORT, HOSTNAME, (err) => {
  if (err) {
    return console.log("Error occured :", err);
  }

  console.log("Listening to", hostname);
});
