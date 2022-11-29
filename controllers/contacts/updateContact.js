const contacts = require('../../models/contacts');
const { updateContactSchema } = require('../../validation/validationSchemas');

async function updateContact(req, res, next) {
  try {
    const error = await updateContactSchema.validateAsync({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });
    const contactList = await contacts.updateContact(
      req.params.contactId,
      req.body
    );
    res.json(contactList);
  } catch (err) {
    next(err.message);
  }
}

module.exports = updateContact;
