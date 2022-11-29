const { log } = require('console');
const fs = require('fs/promises');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { createError } = require('../helpers/createError');

const contactsDataPath = path.join(__dirname, './contacts.json');

const listContacts = async () => {
  const contactsList = await fs.readFile(contactsDataPath, 'utf-8');

  return JSON.parse(contactsList);
};

const getContactById = async (contactId) => {
  const contactsList = await fs.readFile(contactsDataPath, 'utf-8');
  const parsedContactsList = JSON.parse(contactsList);
  const [contact] = parsedContactsList.filter((el) => el.id === contactId);
  return contact;
};

const removeContact = async (contactId) => {
  const contactsList = await fs.readFile(contactsDataPath, 'utf-8');
  const parsedContactsList = JSON.parse(contactsList);

  const conatactIndex = parsedContactsList.findIndex(
    (el) => el.id === contactId
  );

  if (conatactIndex === -1) return conatactIndex;

  parsedContactsList.splice(conatactIndex, 1);

  await fs.writeFile(
    contactsDataPath,
    JSON.stringify(parsedContactsList, null, 2),
    'utf-8'
  );
};

const addContact = async (body) => {
  const contactsList = await fs.readFile(contactsDataPath, 'utf-8');
  const parsedContactsList = JSON.parse(contactsList);

  const newContact = {
    id: uuidv4(),
    name: body.name,
    email: body.email,
    phone: body.phone,
  };

  const newContactsList = [newContact, ...parsedContactsList];
  fs.writeFile(
    contactsDataPath,
    JSON.stringify(newContactsList, null, 2),
    'utf-8'
  );
  return newContactsList;
};

const updateContact = async (contactId, body) => {
  const contactsList = await fs.readFile(contactsDataPath, 'utf-8');
  const parsedContactsList = JSON.parse(contactsList);

  const conatactIndex = parsedContactsList.findIndex(
    (el) => el.id === contactId
  );

  if (conatactIndex === '-1') return;

  const [conatact] = parsedContactsList.filter((el) => el.id === contactId);

  const updatedContact = {
    ...conatact,
    name: body.name || conatact.name,
    email: body.email || conatact.email,
    phone: body.phone || conatact.phone,
  };

  parsedContactsList.splice(conatactIndex, 1, updatedContact);

  fs.writeFile(
    contactsDataPath,
    JSON.stringify(parsedContactsList, null, 2),
    'utf-8'
  );

  return updatedContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
