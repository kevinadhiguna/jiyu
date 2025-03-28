const mongoose = require("mongoose");

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// ^\w+: The email must start with one or more word characters (letters, numbers, or underscores).
// ([\.-]?\w+)*: After the initial characters, it can optionally include a dot or hyphen followed by more word characters, repeated as needed.
// @: There must be an "@" symbol separating the local part (before the @) and the domain part (after the @).
// \w+: The domain must have at least one word character.
// ([\.-]?\w+)*: Similar to before, it can have optional dots or hyphens followed by word characters.
// (\.\w{2,3})+: Finally, the domain must end with a dot followed by 2 to 3 word characters (e.g., ".com", ".org").

// Phone number validation regex (supports international formats with optional spaces, dashes, etc.)
const phoneNumberRegex = /^\+?[1-9]\d{1,14}$/;

// Create schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'first name is required'],
    trim: true, // If the schema does not use trim: true, the value will be saved as " John " (with spaces included)
    minlength: [1, "Please put your first name"], // There are people whose first name is only 1 character
  },
  middleName: {
    type: String,
    trim: true,
    minlength: [1, "Please put your last name"], // Note: it's minlength, not minLength!
  },
  lastName: {
    type: String,
    required: [true, 'lastname is required'],
    trim: true,
    minlength: [1, "Please put your last name"], // Not sure about minimum last name length. Just put it 1 character at this point.. 
  },
  age: {
    type: Number,
    min: 1,
    max: 150,
  },
  // Optional field for additional user info
  dateOfBirth: {
    type: Date,
    // required: [true, 'Please enter your date of birth'],
    validate: {
      validator: function (value) {
        // Ensure the date is in the past
        return value && value < Date.now();
      },
      message: 'Date of birth can not be in the future',
    },
  },
  phoneNumber: {
    type: String,
    match: [phoneNumberRegex, 'Please provide a valid phone number (with optional country code)']
  },
  password: {
    type: String,
    required: [true, "Password not provided"],
    minlength: [8, "Password must be at least 8 characters"],
    validate: {
      validator: function (input) {
        return passwordRegex.test(input);
      },
      message: "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.",
    },
  },
  email: [{
    type: String,
    required: [true, "Please provide email address"],
    lowercase: true,
    unique: true,
    trim: true,
    match: [
      // Validate the format of email address
      emailRegex,
      "Email format is possibly wrong..",
    ],
  }], // To anticipate if some users own multiple email accounts
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

  isVerified: {
    type: Boolean,
    default: false, // Whether user email is verified or not
  },

  isActive: {
    type: Boolean,
    default: true, // Whether user account is active or not
  },

  // Role and Permissions
  roles: {
    type: [String],
    enum: ['user', 'admin'], // Define role based on application needs
    default: ['user'],
  },

  // For security, mainly for preventing brute-force attacks
  isLocked: {
    type: Boolean,
    default: false,
  },
  failedLoginAttempts: {
    type: Number,
    default: 0,
  },
},
{
  // Let mongoose automatically manage the 'createdAt' and 'updatedAt' fields
  timestamps: true,
});

// Hash password before saving user
userSchema.pre('save', async function hashPassword(next) {
  // Only hash if password has been modified
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10); // Salt rounds
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to check if password matches
userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}

// Resetting password (if necessary)
userSchema.methods.generateResetPasswordToken = function () {
  const crypto = require('crypto');
  
  // Generate a random token
  const token = crypto.randomBytes(20).toString('hex');
  
  this.resetPasswordToken = token;
  // Expires in 1 hour
  this.resetPasswordExpires = Date.now() + 3600000;

  return token;
}

// Make and export model, based on the schema created above
module.exports = mongoose.model("User", userSchema);
