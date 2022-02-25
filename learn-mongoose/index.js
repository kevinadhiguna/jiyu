const mongoose = require("mongoose");
const User = require("./model/userModel");
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);
