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
  // Add an error handler created by ExpressJS, if a field named text does not exist in request body.
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field !");
  }

  res.status(200).json({ message: "Set a goal" });
};

// @desc    Update a Goal
// @route   PUT /api/goals/:id
// @access   Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update a goal ${req.params.id}` });
};

// @desc    Delete a Goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete a goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
