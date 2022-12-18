const express = require('express');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { uploadController } = require('../../controllers/files');
const controllerWrapper = require('../../helpers/controllerWrapper');
const { authMiddleware } = require('../../middlewares');

const FILE_DIR = path.resolve('./tmp');
const maxSize = 10485760; // 10MB

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, FILE_DIR);
  },
  filename: (req, file, cb) => {
    const [, extension] = file.originalname.split('.');
    cb(null, `${uuidv4()}.${extension}`);
  },
});

const uploadMiddleware = multer({
  storage,
  limits: {
    fileSize: maxSize,
  },
});

router.patch(
  '/avatars',
  authMiddleware,
  uploadMiddleware.single('avatar'),
  controllerWrapper(uploadController)
);

router.use('/download', express.static('public'));

module.exports = router;
