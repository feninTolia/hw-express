const Contact = require('../../models/contacts');

async function deleteContact(req, res) {
  const { contactId } = req.params;

  await Contact.findByIdAndRemove(contactId);

  res.json({ message: 'contact deleted' });
}

module.exports = deleteContact;
