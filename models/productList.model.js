const mongoose = require('mongoose');

const ProductList = new mongoose.Schema(
  {
    payload: [
      {
        brand: {
          type: String,
          required: true, // Optional: you might want to ensure brand is always provided
        },
        mrp: {
          type: Number,
          required: true, // Optional: you might want to ensure mrp is always provided
        },
      },
    ],
    productId: {
      type: String,
      required: [true, 'Product Id is required'],
    },
  },
  { timestamps: true }
);

const ProductListSchema = mongoose.model('ProductList', ProductList);
module.exports = ProductListSchema;