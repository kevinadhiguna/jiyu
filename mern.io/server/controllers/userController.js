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

  res.json({
    message: "Register a user",
  });
});

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access Public
const loginUser = (req, res) => {
  res.json({
    message: "Login user",
  });
};

// @desc    Get user data
// @route   GET /api/users/me
// @access  Public
const getMe = (req, res) => {
  res.json({
    message: "My Data display",
  });
};

module.exports = { registerUser, loginUser, getMe };
