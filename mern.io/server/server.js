const express = require("express");
const app = express();

require("dotenv").config();

const port = process.env.PORT || 5000;

const goalRoutes = require("./routes/goalRoutes");

app.use("/api/goals", goalRoutes);

app.listen(port, () => {
  console.log(`The app has been launched on port ${port}.`);
});
