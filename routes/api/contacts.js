const express = require('express');

const {
  getAll,
  getContactById,
  addContact,
  deleteContact,
  updateContact,
  updateStatusContact,
} = require('../../controllers/contacts');

const controllerWrapper = require('../../helpers/controllerWrapper');
const { validateBody, isValidDBID } = require('../../middlewares');

const {
  addContactSchema,
  updateContactSchema,
  updateStatusContactSchema,
} = require('../../validation');

const router = express.Router();

router
  .get('/', controllerWrapper(getAll))
  .post('/', validateBody(addContactSchema), controllerWrapper(addContact));

router
  .get('/:contactId', isValidDBID(), controllerWrapper(getContactById))
  .put(
    '/:contactId',
    isValidDBID(),
    validateBody(updateContactSchema),
    controllerWrapper(updateContact)
  )
  .delete('/:contactId', isValidDBID(), controllerWrapper(deleteContact));

router.patch(
  '/:contactId/favorite',
  isValidDBID(),
  validateBody(updateStatusContactSchema),
  controllerWrapper(updateStatusContact)
);
module.exports = router;
