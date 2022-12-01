const { listContacts } = require('../../models/contacts');

async function getAll(_, res) {
  const contatcsList = await listContacts();
  res.json(contatcsList);
}

module.exports = getAll;
