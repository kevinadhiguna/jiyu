const mongoose = require("mongoose");

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Create schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: [1, "Please put your first name"], // There are people whose first name is only 1 character
  },
  middleName: {
    type: String,
    min: [1, "Please put your last name"],
  },
  lastName: {
    type: String,
    required: true,
    min: [1, "Please put your last name"], // Not sure about minimum last name length. Just put it 1 character at this point.. 
  },
  age: {
    type: Number,
    min: 1,
    max: 150,
  },
  phoneNumber: String, // To-do: should be expanded in detail
  password: {
    type: String,
    required: true,
    min: [8, "Password must be at least 8 characters"],
    validate: {
      validator: function (input) {
        return passwordRegex.test(input);
      },
      message: "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.",
    },
  },
  email: [{
    type: String,
    required: true,
    match: [
      // Validate the format of email address
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      // ^\w+: The email must start with one or more word characters (letters, numbers, or underscores).
      // ([\.-]?\w+)*: After the initial characters, it can optionally include a dot or hyphen followed by more word characters, repeated as needed.
      // @: There must be an "@" symbol separating the local part (before the @) and the domain part (after the @).
      // \w+: The domain must have at least one word character.
      // ([\.-]?\w+)*: Similar to before, it can have optional dots or hyphens followed by word characters.
      // (\.\w{2,3})+: Finally, the domain must end with a dot followed by 2 to 3 word characters (e.g., ".com", ".org").
      "Email format is possibly wrong..",
    ],
  }], // To anticipate if some users own multiple email accounts
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
      min: 0o501,
      max: 99950,
      validate: {
        validator: function(zipCode) {
          // zipcode should be exactly 5 digits
          return zipCode?.toString().length === 5;
        },
        message: zipCode => `${zipCode} has to be 5 digits`
        // Reference: Mongoose validation function https://stackoverflow.com/a/68523867
      },
    },
    // Note:
    // - 'min' does not mean 'min-length'. Same goes for 'max' (different to 'max-length')
    // - Hence, instead of placing 'min: 1' and 'max: 5', I believe it is more appropriate to put the smallest and the highest numbered ZIP codes
    // - According to USPS, the highest numbered ZIP Code is 99950 in Ketchikan, AK. The lowest ZIP Code number is 00501 (needs to be noted '0o501' since octal literals are not allowed)
  },
});

// Make and export model, based on the schema created above
module.exports = mongoose.model("User", userSchema);
