const Contact = require('../../models/contacts');

async function getAll(_, res) {
  const contatcsList = await Contact.find({});

  res.json(contatcsList);
}

module.exports = getAll;
