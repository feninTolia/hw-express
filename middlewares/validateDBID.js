const { isValidObjectId } = require('mongoose');

const isValidDBID = (req, _, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    const error = new Error(`Id ${contactId} - is not correct`);
    error.status = 400;
    next(error);
  }
  next();
};

module.exports = isValidDBID;
