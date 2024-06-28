const mongoose = require('mongoose');

const Product = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    description: {
      type: String,
      required: false,
    },
    productId: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const ProductSchema = new mongoose.model('Product', Product);

module.exports = ProductSchema;
