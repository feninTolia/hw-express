const { createError } = require('../../helpers');
const Contact = require('../../models/contacts');

async function getContactById(req, res) {
  const { contactId } = req.params;
  const { _id: owner } = req.user;

  const result = await Contact.findOne({
    _id: contactId,
    owner,
  }).populate('owner');

  if (!result) {
    throw createError({
      status: 400,
      message: `Wrong ID`,
    });
  }

  res.json(result);
}

module.exports = getContactById;
