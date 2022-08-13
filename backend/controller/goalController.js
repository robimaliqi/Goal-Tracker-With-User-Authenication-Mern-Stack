// @desc Get goals (after we authentication it only add a specific user goal)
// @route GET /api/goals
// @acess Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

// @desc Set goals
// @route POST /api/goals
// @acess Private
const setGoal = (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Set goal" });
};

// @desc  Update goal
// @route PUT /api/goals/:id
// @acess Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// @desc Delete goal
// @route DELETE /api/goals/:id
// @acess Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
