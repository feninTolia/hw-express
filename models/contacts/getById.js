const fs = require('fs/promises');
const path = require('path');
const contactsDataPath = path.join(__dirname, '../contactsDB.json');

const getById = async (contactId) => {
  const contactsList = await fs.readFile(contactsDataPath, 'utf-8');
  const parsedContactsList = JSON.parse(contactsList);
  const [contact] = parsedContactsList.filter((el) => el.id === contactId);
  return contact;
};

module.exports = getById;
