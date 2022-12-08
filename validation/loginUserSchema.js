const Joi = require('joi');

const loginUserSchema = Joi.object({
  password: Joi.string().min(8).required().messages({
    'any.required': 'missing required password field',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'missing required email field',
  }),
});

module.exports = loginUserSchema;
