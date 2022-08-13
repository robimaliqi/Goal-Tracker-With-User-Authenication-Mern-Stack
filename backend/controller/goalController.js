const asyncHandler = require("express-async-handler");

// @desc Get goals (after we authentication it only add a specific user goal)
// @route GET /api/goals
// @acess Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

// @desc Set goals
// @route POST /api/goals
// @acess Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set goal" });
});

// @desc  Update goal
// @route PUT /api/goals/:id
// @acess Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc Delete goal
// @route DELETE /api/goals/:id
// @acess Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
