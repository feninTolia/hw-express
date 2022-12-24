const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');
const { randomUUID } = require('crypto');

const { createError, sendEmail } = require('../helpers');
const { User } = require('../models/users/index');

const { BASE_URL } = process.env;

const registration = async (email, password) => {
  const user = await User.findOne({ email });

  if (user) {
    throw createError({ status: 409, message: 'Email in use' });
  }

  const avatarURL = gravatar.url(
    email,
    { s: '100', r: 'x', d: 'retro' },
    false
  );
  const verificationToken = randomUUID();

  const newUser = new User({
    email,
    password,
    avatarURL,
    verificationToken,
  });

  await newUser.save();

  const message = {
    to: email,
    subject: 'Email verification',
    html: `<a href="${BASE_URL}/api/users/verify/${verificationToken}">Click to verify your email</a>`,
  };

  await sendEmail(message);

  return newUser;
};

const login = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user.verify) {
    throw createError({
      status: 401,
    });
  }

  if (!user) {
    throw createError({
      status: 401,
      message: `Email or password wrong`,
    });
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw createError({
      status: 401,
      message: `Email or password wrong`,
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
