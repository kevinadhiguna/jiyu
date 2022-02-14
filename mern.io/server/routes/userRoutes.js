const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

// Registration
router.post("/", registerUser);

// Login
router.post("/login", loginUser);

// Get user data
router.get("/me", getMe);

module.exports = router;
