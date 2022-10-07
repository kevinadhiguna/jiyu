const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String
});

module.exports = mongoose.model("User", userSchema);
