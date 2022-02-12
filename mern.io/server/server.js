const express = require("express");
const app = express();

/**
 * Notes regarding "express.json()" and "express.urlencoded()" from StackOverflow (https://stackoverflow.com/a/51844327) :
 * 
 * - You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Requests.
 * - You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both these requests you are sending data (in the form of some data object) to the server.
 * - express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
 * - express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays.
 * - If you are using Express >= 4.16.0, body parser has been re-added under the methods "express.json()" and "express.urlencoded()".
 */
// Parse raw JSON
app.use(express.json());
// The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true)
app.use(express.urlencoded({ extended: false }));

// Load environment variables
require("dotenv").config();
const port = process.env.PORT || 5000;

// Register routes
const goalRoutes = require("./routes/goalRoutes");
app.use("/api/goals", goalRoutes);

// Start the app (back-end server)
app.listen(port, () => {
  console.log(`The app has been launched on port ${port}.`);
});