const express = require('express');

const {
  getAll,
  getContactById,
  addContact,
  deleteContact,
  updateContact,
} = require('../../controllers/contacts');

const controllerWrapper = require('../../helpers/controllerWrapper');

const router = express.Router();

router
  .get('/', controllerWrapper(getAll))
  .post('/', controllerWrapper(addContact));

router
  .get('/:contactId', controllerWrapper(getContactById))
  .put('/:contactId', controllerWrapper(updateContact))
  .delete('/:contactId', controllerWrapper(deleteContact));

module.exports = router;
