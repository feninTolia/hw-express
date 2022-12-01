const fs = require('fs/promises');
const path = require('path');
const contactsDataPath = path.join(__dirname, '../contactsDB.json');

async function listContacts() {
  const contactsList = await fs.readFile(contactsDataPath, 'utf-8');

  return JSON.parse(contactsList);
}

module.exports = listContacts;
