const fs = require('fs/promises');
const path = require('path');

const contactsDataPath = path.join(__dirname, '../contactsDB.json');

const updateContact = async (contactId, body) => {
  const contactsList = await fs.readFile(contactsDataPath, 'utf-8');
  const parsedContactsList = JSON.parse(contactsList);

  const conatactIndex = parsedContactsList.findIndex(
    (el) => el.id === contactId
  );

  if (conatactIndex === -1) return conatactIndex;

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

module.exports = updateContact;
