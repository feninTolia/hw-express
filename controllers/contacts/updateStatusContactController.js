const { createError } = require('../../helpers/createError');
const Contact = require('../../models/contacts');

async function updateStatusContact(req, res) {
  const { contactId } = req.params;
  const { name, email, phone, favorite } = req.body;
  const { _id: owner } = req.user;

  const result = await Contact.findOneAndUpdate(
    { _id: contactId, owner },
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
      message: `Wrong ID`,
    });
  }

  res.json(result);
}

module.exports = updateStatusContact;
