const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');

const { createError } = require('../helpers');
const { User } = require('../models/users/index');

const registration = async (email, password) => {
  const user = await User.findOne({ email });
  if (user) {
    throw createError({ status: 409, message: 'Email in use' });
  }

  const newUser = new User({
    email,
    password,
    avatarURL: gravatar.url(email, { s: '100', r: 'x', d: 'retro' }, false),
  });

  await newUser.save();

  return newUser;
};

const login = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw createError({
      status: 401,
      message: `Email or password wrong`,
    });
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw createError({
      status: 401,
      message: `password wrong`,
    });
  }

  const token = jwt.sign(
    { userID: user._id, createdAt: user.createdAt },
    process.env.JWT_SECRET,
    { expiresIn: '1w' }
  );

  await User.findByIdAndUpdate(user._id, { token });

  return { token, user };
};

module.exports = {
  registration,
  login,
};
