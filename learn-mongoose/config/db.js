const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect();
    console.log(`Connected to MongoDB host : ${conn.connection.host}`);
  } catch (errorConnectionDB) {
    console.error(`Failed to connect to MongoDB : ${errorConnectionDB}`);
    process.exit(1);
  }
};

module.exports = connectDB;
