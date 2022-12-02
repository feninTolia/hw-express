const Contact = require('../../models');

async function getContactById(req, res) {
  const { contactId } = req.params;

  const contact = await Contact.findById(contactId);

  res.json(contact);
}

module.exports = getContactById;
