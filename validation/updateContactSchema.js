const Joi = require('joi');

const updateContactSchema = Joi.object({
  name: Joi.string().alphanum().min(2).max(30),

  email: Joi.string().email(),
  phone: Joi.string().regex(
    /^\+?3?8?(0[\s.-]\d{2}[\s.-]\d{3}[\s.-]\d{2}[\s.-]\d{2})$/,
    '--380 XX XXX XX XX--'
  ),
  favorite: Joi.boolean(),
})
  .required()
  .min(1)
  .messages({ 'object.min': 'missing fields' });

module.exports = updateContactSchema;
