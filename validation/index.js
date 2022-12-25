const addContactSchema = require('./addContactSchema');
const updateContactSchema = require('./updateContactSchema');
const updateStatusContactSchema = require('./updateStatusContactSchema');
const registerUserSchema = require('./registerUserSchema');
const loginUserSchema = require('./loginUserSchema');
const resendVerificationSchema = require('./resendVerificationSchema');

module.exports = {
  addContactSchema,
  updateContactSchema,
  updateStatusContactSchema,
  registerUserSchema,
  loginUserSchema,
  resendVerificationSchema,
};
