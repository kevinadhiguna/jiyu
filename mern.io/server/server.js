const express = require("express");
const app = express();

// Parse raw JSON
app.use(express.json());
// The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true)
app.use(express.urlencoded({ extended: false }));

require("dotenv").config();

const port = process.env.PORT || 5000;

const goalRoutes = require("./routes/goalRoutes");

app.use("/api/goals", goalRoutes);

app.listen(port, () => {
  console.log(`The app has been launched on port ${port}.`);
});
