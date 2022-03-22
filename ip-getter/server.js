const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

const getuseripRoute = require("./route/getuseripRoute");
app.use("/", getuseripRoute);

const PORT = process.env.PORT || 5000;
const HOSTNAME = process.env.HOSTNAME || "localhost";

const server = app.listen(PORT, HOSTNAME, () => {
  console.log(`App is running on ${HOSTNAME}:${PORT}`);
});

const createHttpterminator = require("lil-http-terminator");
const httpTerminator = createHttpterminator({ server });

async function shutdown(signalORevent) {
  const { code, message, success, error } = await httpTerminator.terminate();
  console.log(`${signalORevent} occurred, shutting down...`);
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
