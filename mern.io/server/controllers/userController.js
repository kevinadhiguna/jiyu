// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = (req, res) => {
  res.json({
    message: "Register a user",
  });
};

module.exports = { registerUser };
