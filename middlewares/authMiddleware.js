const jwt = require('jsonwebtoken');
const { createError } = require('../helpers');
const { User } = require('../models/users');

const authMiddleware = async (req, res, next) => {
  try {
    const [tokenType, token] = req.headers.authorization.split(' ');

    if (tokenType !== 'Bearer') {
      throw createError({ status: 401 });
    }

    if (!token) {
      next(createError({ status: 401 }));
    }

    const { userID } = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(userID);

    if (!user || !user.token || user.token !== token) {
      throw createError({ status: 401 });
    }

    req.user = user;

    next();
  } catch (error) {
    if (!error.status) {
      error.status = 401;
      error.message = 'Unauthorized';
    }

    next(error);
  }
};

module.exports = authMiddleware;
