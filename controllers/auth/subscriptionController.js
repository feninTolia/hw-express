const { User } = require('../../models/users');

const subscriptionController = async (req, res) => {
  const { _id, email } = req.user;

  await User.findByIdAndUpdate(
    _id,
    { subscription: req.body.subscription },
    { runValidators: true }
  );

  res.json({ user: { email, subscription: req.body.subscription } });
};

module.exports = subscriptionController;
