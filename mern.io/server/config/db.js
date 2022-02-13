const mongoose = require("mongoose");

const connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected : ${conn.connection.host}`.cyan.underline);
  } catch (error) {}
};
