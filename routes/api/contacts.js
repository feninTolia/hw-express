const express = require('express');

const {
  getAll,
  getContactById,
  addContact,
  deleteContact,
  updateContact,
} = require('../../controllers/contacts');

const controllerWrapper = require('../../helpers/controllerWrapper');
const { validateBody } = require('../../middlewares');

const { addContactSchema, updateContactSchema } = require('../../validation');

const router = express.Router();

router
  .get('/', controllerWrapper(getAll))
  .post('/', validateBody(addContactSchema), controllerWrapper(addContact));

router
  .get('/:contactId', controllerWrapper(getContactById))
  .put(
    '/:contactId',
    validateBody(updateContactSchema),
    controllerWrapper(updateContact)
  )
  .delete('/:contactId', controllerWrapper(deleteContact));

module.exports = router;
