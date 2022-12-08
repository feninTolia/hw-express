const Contact = require('../../models/contacts');

async function getAll(req, res) {
  const { _id: owner } = req.user;
  const { page: skip, limit, favorite } = req.query;

  const page = skip * limit - limit;
  const query = {
    owner,
  };

  if (favorite) {
    query.favorite = favorite;
  }

  console.log(query);

  const contatcsList = await Contact.find(query)
    .skip(page || 0)
    .limit(limit || 0);

  res.json(contatcsList);
}

module.exports = getAll;
