const { createError } = require('../../helpers/createError');
const { getById } = require('../../models/contacts');

async function getContactById(req, res) {
  const contact = await getById(req.params.contactId);

  if (!contact) {
    throw createError({ status: 404 });
  }
  res.json(contact);
}

module.exports = getContactById;
