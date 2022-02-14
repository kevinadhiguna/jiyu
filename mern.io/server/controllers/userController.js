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
  const userExists = User.findOne({ email });

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
  const user = User.create({
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
  const user = User.findOne({ email });

  // Check if hashed result of password from user input is same as hashed password in database
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    // Not let user log in
    res.status(400);
    throw new Error("The email and password do not match. Please try again..");
  }

  res.json({
    message: "Login user",
  });
});

// @desc    Get user data
// @route   GET /api/users/me
// @access  Public
const getMe = (req, res) => {
  res.json({
    message: "My Data display",
  });
};

module.exports = { registerUser, loginUser, getMe };
