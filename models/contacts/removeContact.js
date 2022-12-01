const fs = require('fs/promises');
const path = require('path');
const contactsDataPath = path.join(__dirname, '../contactsDB.json');

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

module.exports = removeContact;
