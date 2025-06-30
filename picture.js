const express = require('express');
const router = express.Router();
const PictureController = require('../controllers/pictureController');
const pictureController = new PictureController();

// Route for uploading a picture
router.post('/upload', pictureController.uploadPicture.bind(pictureController));

// Route for generating a QR code
router.get('/generate-qr', pictureController.generateQRCode.bind(pictureController));

module.exports = router;