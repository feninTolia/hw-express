const Contact = require('../../models');

async function getAll(_, res) {
  const contatcsList = await Contact.find({});

  res.json(contatcsList);
}

module.exports = getAll;
