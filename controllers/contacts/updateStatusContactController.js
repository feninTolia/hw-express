const { createError } = require('../../helpers/createError');
const Contact = require('../../models/contacts');

async function updateStatusContact(req, res) {
  const { contactId } = req.params;
  const { name, email, phone, favorite } = req.body;

  const result = await Contact.findByIdAndUpdate(
    contactId,
    {
      name,
      email,
      phone,
      favorite,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!result) {
    throw createError({
      status: 400,
      message: `No such entity with id = ${contactId}`,
    });
  }

  res.json(result);
}

module.exports = updateStatusContact;
