const contacts = require('../../models/contacts');

async function getContactsBuId(req, res) {
  const contact = await contacts.getContactById(req.params.contactId);
  res.json(contact);
}

module.exports = getContactsBuId;
