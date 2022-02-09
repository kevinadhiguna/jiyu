const express = require("express");
const router = express.Router();

// GET
router.get("/", (req, res) => {
  res
    .status(200)
    .json({
      "message": "Get initial routes"
    });
});

// POST
router.post("/", (req, res) => {
  res
    .status(200)
    .json({
      "message": "Create a goal"
    });
});

module.exports = router;
