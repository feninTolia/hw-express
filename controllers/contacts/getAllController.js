const Contact = require('../../models/contacts');

async function getAll(req, res) {
  const { _id: owner } = req.user;
  const { page: skip = 1, limit = 3, favorite } = req.query;

  const page = skip * limit - limit;
  const searchFilter = { owner };

  if (favorite) {
    searchFilter.favorite = favorite;
  }

  const contatcsList = await Contact.find(searchFilter).skip(page).limit(limit);

  res.json(contatcsList);
}

module.exports = getAll;
