const contacts = require('../../models/contacts');
const { addContactSchema } = require('../../validation/validationSchemas');

async function addContact(req, res, next) {
  try {
    const error = await addContactSchema.validateAsync({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });
    const contactList = await contacts.addContact(req.body);
    res.status(201).json(contactList);
  } catch (err) {
    next(err.message);
  }
}

module.exports = addContact;
