const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  productCode: String,
  description: String,
  subCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' },
  variations: [{
    size: String,
    color: String,
    price: Number,
    discount: Number
  }]
});
module.exports = mongoose.model('Product', productSchema);
