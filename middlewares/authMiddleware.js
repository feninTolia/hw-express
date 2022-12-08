const jwt = require('jsonwebtoken');
const { createError } = require('../helpers');
const { User } = require('../models/users');

const authMiddleware = async (req, res, next) => {
  try {
    const [, token] = req.headers.authorization.split(' ');

    if (!token) {
      next(createError({ status: 401 }));
    }

    const jwtUser = jwt.decode(token, process.env.JWT_SECRET);

    const user = await User.findOne({ _id: jwtUser.userID });

    req.user = user;
    // req.token = token;
    next();
  } catch (error) {
    next(createError({ status: 401 }));
  }
};

module.exports = authMiddleware;
