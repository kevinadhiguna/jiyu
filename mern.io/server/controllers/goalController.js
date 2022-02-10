// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
  res.status(200).json({
    message: "Get goals",
  });
};

// @desc    Set a Goal
// @route   POST /api/goals
// @access  Private
const setGoal = (req, res) => {
  res.status(200).json({ message: "Set a goal" });
};

module.exports = {
  getGoals,
  setGoal,
};
