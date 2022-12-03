const express = require('express');

const {
  getAllController,
  getContactByIdController,
  addContactController,
  deleteContactController,
  updateContactController,
  updateStatusContactController,
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
  .get('/', controllerWrapper(getAllController))
  .post(
    '/',
    validateBody(addContactSchema),
    controllerWrapper(addContactController)
  );

router
  .get('/:contactId', isValidDBID, controllerWrapper(getContactByIdController))
  .put(
    '/:contactId',
    isValidDBID,
    validateBody(updateContactSchema),
    controllerWrapper(updateContactController)
  )
  .delete(
    '/:contactId',
    isValidDBID,
    controllerWrapper(deleteContactController)
  );

router.patch(
  '/:contactId/favorite',
  isValidDBID,
  validateBody(updateStatusContactSchema),
  controllerWrapper(updateStatusContactController)
);
module.exports = router;
