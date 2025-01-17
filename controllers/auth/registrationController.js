const { registration } = require('../../services/authService');

const registrationController = async (req, res) => {
  const { email, password } = req.body;
  const result = await registration(email, password);

  res.status(201).json({
    user: {
      email,
      subscription: result.subscription,
      avatarURL: result.avatarURL,
      verificationToken: result.verificationToken,
    },
  });
};

module.exports = registrationController;
