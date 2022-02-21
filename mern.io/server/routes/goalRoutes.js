const express = require("express");
const router = express.Router();

const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

// Import auth middleware
const { protect } = require("../middleware/authMiddleware");

/**
 * Option 1 (Easier and more understandable for some people)
 */
// GET
// router.get("/", getGoals);

// POST
// router.post("/", setGoal);

// PUT
// router.put("/:id", updateGoal);

// DELETE
// router.delete("/:id", deleteGoal);

/**
 * Option 2 (more concise and clean for some people)
 */
router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
