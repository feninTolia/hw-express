const contacts = require('../../models/contacts');
const { updateContactSchema } = require('../../validation/validationSchemas');

async function updateContact(req, res) {
  const { error } = updateContactSchema.validate(req.body);

  if (error) {
    throw new Error(error.message);
    createError({ status: 400, message: error.message });
  }

  const contactList = await contacts.updateContact(
    req.params.contactId,
    req.body
  );
  res.json(contactList);
}

module.exports = updateContact;
