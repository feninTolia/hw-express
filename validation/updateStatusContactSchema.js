const Joi = require('joi');

const updateStatusContactSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    'any.required': 'missing required favorite field',
  }),
});

module.exports = updateStatusContactSchema;
