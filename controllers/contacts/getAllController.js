const Contact = require('../../models/contacts');

async function getAll(req, res) {
  const { _id: owner } = req.user;

  const contatcsList = await Contact.find({ owner });

  res.json(contatcsList);
}

module.exports = getAll;
