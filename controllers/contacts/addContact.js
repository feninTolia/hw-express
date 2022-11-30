const contacts = require('../../models/contacts');

async function addContact(req, res) {
  const newContact = await contacts.addContact(req.body);
  res.status(201).json(newContact);
}

module.exports = addContact;
