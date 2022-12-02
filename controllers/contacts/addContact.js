const Contact = require('../../models');

async function addContact(req, res) {
  const { name, email, phone, favorite } = req.body;

  const newContact = await Contact.create({ name, email, phone, favorite });

  res.status(201).json(newContact);
}

module.exports = addContact;
