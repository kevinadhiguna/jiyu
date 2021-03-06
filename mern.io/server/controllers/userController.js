const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  // Things required for registration
  const { name, email, password } = req.body;

  // Error handling
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields !");
  }

  // Check if a user already exists by looking at email
  const userExists = await User.findOne({ email });

  // Throw an error if a user already exists
  if (userExists) {
    res.status(400);
    throw new Error("User already exists...");
  }

  // Generate salt
  const salt = await bcrypt.genSalt(10);
  // Hash password
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create a user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // If successfully created a user
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateJWT(user._id),
    });
  } else {
    // If a new user was not added
    res.status(400);
    throw new Error(
      "Invalid user data, unable to create user. Please try again later..."
    );
  }
});

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check user's email
  const user = await User.findOne({ email });

  // Check if hashed result of password from user input is same as hashed password in database
  if (user && (await bcrypt.compare(password, user.password))) {
    // Return user data and jwt if login is successful
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateJWT(user._id),
    });
  } else {
    // Not let user log in
    res.status(400);
    throw new Error("The email and password do not match. Please try again..");
  }
});

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  // We have access to "req.user" since we set that in middleware
  const { _id, name, email } = await User.findById(req.user.id);

  // Send status code and data
  res.status(200).json({
    id: _id,
    name,
    email,
  });
});

// Generate JSON Web Token (JWT)
const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });
};

module.exports = { registerUser, loginUser, getMe };
