const fs = require('fs/promises');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const contactsDataPath = path.join(__dirname, '../contactsDB.json');

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
  return newContact;
};

module.exports = addContact;
