const { createError } = require('../../helpers/createError');
const contacts = require('../../models/contacts');

async function updateContact(req, res) {
  if (Object.keys(req.body).length === 0) {
    throw createError({ status: 400, message: 'Missing fields' });
  }

  const result = await contacts.updateContact(req.params.contactId, req.body);

  if (result === -1) {
    throw createError({ status: 404 });
  }

  res.json(result);
}

module.exports = updateContact;
