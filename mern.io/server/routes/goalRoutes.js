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

// PUT
router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({
      "message": `Change goal ${req.params.id}`
    });
});

// DELETE
router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({
      "message": `Delete goal ${req.params.id}`
    });
});

module.exports = router;
