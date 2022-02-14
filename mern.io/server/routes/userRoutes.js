const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

// Add authentication middleware (one must login first to visit routes)
const { protect } = require("../middleware/authMiddleware");

// Registration
router.post("/", registerUser);

// Login
router.post("/login", loginUser);

// Get user data
router.get("/me", protect, getMe);

module.exports = router;
