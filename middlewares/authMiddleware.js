const jwt = require('jsonwebtoken');
const { createError } = require('../helpers/createError');
const { User } = require('../models/users');

const authMiddleware = async (req, res, next) => {
  try {
    // eslint-disable-next-line no-unused-vars
    const [tokenType, token] = req.headers.authorization.split(' ');

    if (!token) {
      next(createError({ status: 401, message: 'Please, provide a token' }));
    }

    const jwtUser = jwt.decode(token, process.env.JWT_SECRET);

    const user = await User.findOne({ _id: jwtUser.userID });

    req.user = user;
    // req.token = token;
    next();
  } catch (error) {
    next(createError({ status: 401, message: 'Invalid token or ID' }));
  }
};

module.exports = authMiddleware;
