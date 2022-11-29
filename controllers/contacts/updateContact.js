const { createError } = require('../../helpers/createError');
const contacts = require('../../models/contacts');
const { updateContactSchema } = require('../../validation/validationSchemas');

async function updateContact(req, res) {
  console.dir(Object.keys(req.body).length);
  if (Object.keys(req.body).length === 0) {
    throw createError({ status: 400, message: 'Missing fields' });
  }

  const { error } = updateContactSchema.validate(req.body);

  if (error) {
    throw createError({ status: 400, message: error.message });
  }

  const contactList = await contacts.updateContact(
    req.params.contactId,
    req.body
  );
  res.json(contactList);
}

module.exports = updateContact;
