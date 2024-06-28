const mongoose = require('mongoose');

const ProductList = new mongoose.Schema({
  payload: [
    {
      brand: {
        type: String,
        mrp: Number,
      },
    },
  ],
});
const ProductListSchema = new mongoose.model('ProductList', ProductList);
module.exports = ProductListSchema;
