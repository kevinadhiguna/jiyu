const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

const helmet = require("helmet");
app.use(helmet());

const getuseripRoute = require("./route/getuseripRoute");
app.use("/", getuseripRoute);

const PORT = process.env.PORT || 5000;
console.log(`PORT : ${PORT}`);
const HOSTNAME = process.env.HOSTNAME || "localhost";
console.log(`HOSTNAME : ${HOSTNAME}`);

const server = app.listen(PORT, HOSTNAME, () => {
  console.log(`App is running on ${HOSTNAME}:${PORT}`);
});

const createHttpterminator = require("lil-http-terminator");
const httpTerminator = createHttpterminator({ server });

async function shutdown(signalORevent) {
  console.log(`Signal or Event : ${signalORevent}`);
  const { code, message, success, error } = await httpTerminator.terminate();
  console.log(`\n${signalORevent} occurred, shutting down...`);
  console.log(`
    HTTP server closure result:
      Success: ${success}
      Message: ${message}
      Code: ${code}
      Error (if exists): ${error || ""}
  `);
  process.exit(error ? 1 : 0);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
process.on("uncaughtException", shutdown);
process.on("unhandledRejection", shutdown);

// Example of log when receiving SIGINT and graceful shutdown is successful :
// SIGINT occurred, shutting down...
//
//     HTTP server closure result:
//       Success: true
//       Message: Server successfully closed
//       Code: TERMINATED
//       Error (if exists):
