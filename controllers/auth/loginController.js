const { login } = require('../../services/authService');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const { token, user } = await login(email, password);

  res.json({
    token,
    user: {
      email: email,
      subscription: user.subscription,
    },
  });
};

module.exports = loginController;
