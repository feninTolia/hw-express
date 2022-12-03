const { createError } = require('../../helpers/createError');
const Contact = require('../../models/contacts');

async function deleteContact(req, res) {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndRemove(contactId);

  if (!result) {
    throw createError({
      status: 400,
      message: `No such entity with id = ${contactId}`,
    });
  }

  res.json({ message: 'contact deleted' });
}

module.exports = deleteContact;
