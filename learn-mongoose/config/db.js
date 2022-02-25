const mongoose = require("mongoose");

const connectDB = async () => {
  const mongo_uri = process.env.MONGO_URI || "mongodb://localhost:27017";

  try {
    const conn = await mongoose.connect(mongo_uri);
    console.log(`Connected to MongoDB host : ${conn.connection.host}`);
  } catch (errorConnectionDB) {
    console.error(`Failed to connect to MongoDB : ${errorConnectionDB}`);
    process.exit(1);
  }
};

module.exports = connectDB;
