const express = require("express");
const router = express.Router();

const { getGoals, setGoal, updateGoal } = require("../controllers/goalController");

// GET
router.get("/", getGoals);

// POST
router.post("/", setGoal);

// PUT
router.put("/:id", updateGoal);

// DELETE
router.delete("/:id", (req, res) => {
  res.status(200).json({
    message: `Delete goal ${req.params.id}`,
  });
});

module.exports = router;
