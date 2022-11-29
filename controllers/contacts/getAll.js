const contacts = require('../../models/contacts');

async function getAll(_, res) {
  const contatcsList = await contacts.listContacts();
  res.json(contatcsList);
}

module.exports = getAll;
