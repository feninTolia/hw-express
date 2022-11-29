const contacts = require('../../models/contacts');

async function deleteContact(req, res) {
  await contacts.removeContact(req.params.contactId);
  res.json({ message: 'contact deleted' });
}

module.exports = deleteContact;
