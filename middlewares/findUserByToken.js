const { User } = require('../models/users');
const jwt = require('jsonwebtoken');
const { createError } = require('../helpers/createError');

const findUserByToken = async (req, res, next) => {
  try {
    const [, token] = req.headers.authorization.split(' ');
    const jwtUser = jwt.decode(token, process.env.JWT_SECRET);
    const user = await User.findById(jwtUser.userID);

    req.user = user;
    next();
  } catch (error) {
    next(createError({ status: 401 }));
  }
};

module.exports = findUserByToken;
