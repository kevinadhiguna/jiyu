const mongoose = require('mongoose');
require("dotenv").config();

const mongodbURL = process.env.MONGODB_URL || "mongodb://localhost/baseball";

try {
  mongoose.connect(mongodbURL);
} catch (error) {
  console.error("Error connecting to MongoDB : ", error);  
}
