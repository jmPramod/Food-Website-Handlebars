const { default: mongoose } = require('mongoose');
require('dotenv').config();
const connectDataBase = () => {
  try {
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
    console.log('Data Base Connection Successfull!!!!');
  } catch (err) {
    console.log('Error in Data Base = ', err);
  }
};
module.exports = { connectDataBase };
