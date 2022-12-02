const { createError } = require('../../helpers/createError');
const Contact = require('../../models/contacts');

async function getContactById(req, res) {
  const { contactId } = req.params;

  const result = await Contact.findById(contactId);

  if (!result) {
    throw createError({
      status: 400,
      message: `No such entity with id = ${contactId}`,
    });
  }

  res.json(result);
}

module.exports = getContactById;
