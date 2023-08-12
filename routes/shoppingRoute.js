const express = require('express');
const { homeController } = require('../controller/shoppingController');
const shoppingRoutes = express.Router();

shoppingRoutes.get('/', homeController);

module.exports = shoppingRoutes;
