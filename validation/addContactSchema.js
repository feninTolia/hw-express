const Joi = require('joi');

const addContactSchema = Joi.object({
  name: Joi.string().min(2).max(30).required().messages({
    'any.required': 'missing required name field',
  }),

  email: Joi.string().email().required().messages({
    'any.required': 'missing required email field',
  }),
  phone: Joi.string()
    .regex(
      /^\+?3?8?(0[\s.-]\d{2}[\s.-]\d{3}[\s.-]\d{2}[\s.-]\d{2})$/,
      '--380 XX XXX XX XX--'
    )
    .required()
    .messages({
      'any.required': 'missing required phone field',
    }),
  favorite: Joi.boolean(),
});

module.exports = addContactSchema;
