const express = require('express');
const {
  registrationController,
  loginController,
  logoutController,
  currentController,
  subscriptionController,
} = require('../../controllers/auth');
const controllerWrapper = require('../../helpers/controllerWrapper');
const { registerUserSchema, loginUserSchema } = require('../../validation');
const { validateBody, findUserByToken } = require('../../middlewares');

const router = express.Router();

router.patch('/', findUserByToken, controllerWrapper(subscriptionController));

router.post(
  '/register',
  validateBody(registerUserSchema),
  controllerWrapper(registrationController)
);

router.post(
  '/login',
  validateBody(loginUserSchema),
  controllerWrapper(loginController)
);

router.post('/logout', findUserByToken, controllerWrapper(logoutController));

router.get('/current', findUserByToken, controllerWrapper(currentController));

module.exports = router;
