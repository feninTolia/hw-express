const Contact = require('../../models');

async function deleteContact(req, res) {
  const { contactId } = req.params;

  await Contact.findByIdAndRemove(contactId);

  res.json({ message: 'contact deleted' });
}

module.exports = deleteContact;
