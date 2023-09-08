const { default: mongoose } = require('mongoose');

let profile = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, unique: true },
  },
  { timestamp: true }
);

module.export = mongoose.model('UserCredential', profile);
