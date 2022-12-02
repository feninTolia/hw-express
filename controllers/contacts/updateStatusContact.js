const Contact = require('../../models');

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

  res.json(result);
}

module.exports = updateStatusContact;
