const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/userController");

// Registration
router.post("/", registerUser);

// Login
router.post("/login", loginUser);
