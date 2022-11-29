const { createError } = require('../../helpers/createError');
const contacts = require('../../models/contacts');

async function getContactById(req, res) {
  const contact = await contacts.getContactById(req.params.contactId);

  if (!contact) {
    throw createError({ status: 404 });
  }
  res.json(contact);
}

module.exports = getContactById;
