const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

// Add authentication middleware (one must login first to visit routes)
const { protect } = require("../middleware/authMiddleware");

// -- Option 1 --
// Registration
router.post("/", registerUser);
// Login
router.post("/login", loginUser);
// Get user data
router.get("/me", protect, getMe);

// -- Option 2 --
// router.route("/").post("registerUser");
// router.route("/login").post("loginUser");
// router.route("/me").get(protect, getMe);

module.exports = router;
