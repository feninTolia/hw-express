const { createError } = require('../../helpers');
const { User } = require('../../models/users');

async function verifyController(req, res) {
  const { verificationToken } = req.params;

  const user = await User.findOne({ verificationToken });

  if (!user) {
    throw createError({ status: 404, message: 'User not found' });
  }

  await User.findByIdAndUpdate(user._id, {
    isVerified: true,
    verificationToken: '',
  });

  res.status(200).json({ message: 'Email was succsesfully verified' });
}

module.exports = verifyController;