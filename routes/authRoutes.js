const express = require('express');
const { register } = require('../controller/authentication');
const authRoute = express.Router();

authRoute.get('/register', register);

authRoute.post('/register', register);
module.exports = { authRoute };
