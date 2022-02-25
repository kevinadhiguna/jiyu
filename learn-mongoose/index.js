const mongoose = require("mongoose");
const User = require("./model/userModel");
require("dotenv").config();

// Connect to MongoDB
const connectDB = require("./config/db");
connectDB();
