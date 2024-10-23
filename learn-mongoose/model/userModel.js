const mongoose = require("mongoose");

// Create schema
const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 1,
    max: 150,
  },
  email: [String], // To anticipate if some users own multiple email accounts
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  bestFriends: [String],
  hobbies: [String],
  address: {
    country: String,
    city: String,
    street: String,
  },
});

// Make and export model, based on the schema created above
module.exports = mongoose.model("User", userSchema);
