const express = require('express');
const {
  homeController,
  createFoodController,
} = require('../controller/shoppingController');
const cloudinary = require('../config/cloudinary'); // Import your Cloudinary configuration

const shoppingRoutes = express.Router();
const storage = require('../config/multer');
const multer = require('multer');
let upload = multer({ storage });
shoppingRoutes.get('/home', homeController);

shoppingRoutes.post(
  '/create-food-list',
  upload.any(['img', 'video']),
  createFoodController
);
module.exports = shoppingRoutes;
