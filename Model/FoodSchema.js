const { default: mongoose } = require('mongoose');

let profile = mongoose.Schema(
  {
    id: { type: String },
    img: { type: String },
    name: { type: String },
    dsc: { type: String },
    price: { type: Number },
    rate: { type: Number },
    country: { type: String },
    video: { type: String },
  },
  { timestamp: true }
);

module.export = mongoose.model('FoodMenu', profile);
