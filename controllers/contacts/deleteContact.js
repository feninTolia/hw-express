const { createError } = require('../../helpers/createError');
const contacts = require('../../models/contacts');

async function deleteContact(req, res) {
  const result = await contacts.removeContact(req.params.contactId);
  if (result === -1) {
    throw createError({ status: 404 });
  }
  res.json({ message: 'contact deleted' });
}

module.exports = deleteContact;
