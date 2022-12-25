const Joi = require('joi');

const resendVerificationSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'missing required email field',
  }),
});

module.exports = resendVerificationSchema;
