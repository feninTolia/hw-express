const express = require('express');

const {
  getAll,
  getContactsBuId,
  addContact,
  deleteContact,
  updateContact,
} = require('../../controllers/contacts');

const router = express.Router();

router.get('/', getAll).post('/', addContact);

router
  .get('/:contactId', getContactsBuId)
  .put('/:contactId', updateContact)
  .delete('/:contactId', deleteContact);

module.exports = router;
