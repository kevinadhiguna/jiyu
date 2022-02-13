const asyncHandler = require("express-async-handler");

// Import model in which goal schema exists
const Goal = require("../models/goalModel");

// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  // Find all goals
  const goals = await Goal.find();

  res.status(200).json(goals);
});

// @desc    Set a Goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  // Add an error handler created by ExpressJS, if a field named text does not exist in request body.
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field !");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

// @desc    Update a Goal
// @route   PUT /api/goals/:id
// @access   Private
const updateGoal = asyncHandler(async (req, res) => {
  // Find a record that will be updated
  const goal = await Goal.findById(req.params.id);

  // If the record does not exist, send back status 400
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  // If found, then update it
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// @desc    Delete a Goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  // Find a goal that will be deleted
  const goal = await Goal.findById(req.params.id);

  // Send status 400 if the goal does not exist
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  res.status(200).json({ message: `Delete a goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
