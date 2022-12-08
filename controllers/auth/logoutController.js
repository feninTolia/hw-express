const { User } = require('../../models/users');
const jwt = require('jsonwebtoken');

const logoutController = async (req, res) => {
  const { _id } = req.user;

  await User.findByIdAndUpdate(_id, { token: '' });

  res.status(204).send();
};

module.exports = logoutController;
