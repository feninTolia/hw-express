const Contact = require('../../models/contacts');
const mongoose = require('mongoose');

const toId = mongoose.Types.ObjectId;

async function addContact(req, res) {
  const { name, email, phone, favorite } = req.body;
  const { _id: ownerId } = req.user;

  const owner = toId(ownerId);

  const newContact = await Contact.create({
    name,
    email,
    phone,
    favorite,
    owner,
  });

  res.status(201).json(newContact);
}

module.exports = addContact;
