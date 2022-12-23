const express = require('express');
const {
  registrationController,
  loginController,
  logoutController,
  currentController,
  subscriptionController,
  verifyController,
  resendVerificationController,
} = require('../../controllers/auth');
const controllerWrapper = require('../../helpers/controllerWrapper');
const {
  registerUserSchema,
  loginUserSchema,
  resendVerificationSchema,
} = require('../../validation');
const { validateBody, authMiddleware } = require('../../middlewares');

const router = express.Router();

router.patch('/', authMiddleware, controllerWrapper(subscriptionController));

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

router.post('/logout', authMiddleware, controllerWrapper(logoutController));

router.get('/current', authMiddleware, controllerWrapper(currentController));

router.get('/verify/:verificationToken', controllerWrapper(verifyController));

router.post(
  '/verify',
  validateBody(resendVerificationSchema),
  controllerWrapper(resendVerificationController)
);

module.exports = router;
