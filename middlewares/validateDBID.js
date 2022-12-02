const { isValidObjectId } = require('mongoose');

function isValidDBID() {
  const fn = (req, _, next) => {
    const { contactId } = req.params;
    if (!isValidObjectId(contactId)) {
      const error = new Error(`Id ${contactId} - is not correct`);
      error.status = 400;
      next(error);
    }
    next();
  };

  return fn;
}

module.exports = isValidDBID;
