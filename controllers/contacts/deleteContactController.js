const { createError } = require('../../helpers');
const Contact = require('../../models/contacts');

async function deleteContact(req, res) {
  const { contactId } = req.params;
  const { _id: owner } = req.user;

  const result = await Contact.findOneAndRemove({
    _id: contactId,
    owner,
  });

  if (!result) {
    throw createError({
      status: 400,
      message: `Wrong ID`,
    });
  }

  res.json({ message: 'contact deleted' });
}

module.exports = deleteContact;
