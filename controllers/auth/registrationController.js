const { registration } = require('../../services/authService');

const registrationController = async (req, res) => {
  const { email, password } = req.body;
  const result = await registration(email, password);

  res.json({
    user: {
      email,
      subscription: result.subscription,
    },
  });
};

module.exports = registrationController;
