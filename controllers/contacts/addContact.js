const contacts = require('../../models/contacts');
const { addContactSchema } = require('../../validation/validationSchemas');

async function addContact(req, res) {
  const { error } = addContactSchema.validate(req.body);
  if (error) {
    throw new Error(error.message);
    createError({ status: 400, message: error.message });
  }
  const contactList = await contacts.addContact(req.body);
  res.status(201).json(contactList);
}

module.exports = addContact;
