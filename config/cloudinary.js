// cloudinary-config.js
const cloudinary = require('cloudinary');
require('dotenv').config();
cloudinary.config({
  cloud_name: 'dtvq8ysaj',
  api_key: '159625417423884',
  api_secret: '***************************',
});

module.exports = cloudinary;
