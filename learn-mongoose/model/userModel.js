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
    zipcode: {
      type: Number,
      min: 0o501, // To-do: make it exactly 5 numbers instead
      max: 99950,
    },
    // Note:
    // - 'min' does not mean 'min-length'. Same goes for 'max' (different to 'max-length')
    // - Hence, instead of placing 'min: 1' and 'max: 5', I believe it is more appropriate to put the smallest and the highest numbered ZIP codes
    // - According to USPS, the highest numbered ZIP Code is 99950 in Ketchikan, AK. The lowest ZIP Code number is 00501 (needs to be noted '0o501' since octal literals are not allowed)
  },
});

// Make and export model, based on the schema created above
module.exports = mongoose.model("User", userSchema);
