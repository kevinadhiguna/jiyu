const express = require("express");
const router = express.Router();

const registerUser = require("../controllers/userController");

// Registration
router.post("/", registerUser);
