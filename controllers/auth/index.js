const registrationController = require('./registrationController');
const loginController = require('./loginController');
const logoutController = require('./logoutController');
const currentController = require('./currentController');
const subscriptionController = require('./subscriptionController');
const verifyController = require('./verifyController');
const resendVerificationController = require('./resendVerificationController');

module.exports = {
  registrationController,
  loginController,
  logoutController,
  currentController,
  subscriptionController,
  verifyController,
  resendVerificationController,
};
