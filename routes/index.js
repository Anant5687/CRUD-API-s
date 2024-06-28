const express = require('express');
const router = express.Router();
const productModel = require('../models/product.model.js');
const getNextSequence = require('../helpers/index.js');

// Add Product API
router.post('/addProduct', async (req, res) => {
  try {
    const { name, price } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }

    if (!price) {
      return res.status(400).json({ message: 'Price is required' });
    }

    const productId = await getNextSequence('productId');

    const product = await productModel.create({
      ...req.body,
      productId: `PD-${productId}`,
    });
    res.status(200).send(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get ALl Product API

router.get('/allProducts', async (req, res) => {
  try {
    const allProducts = await productModel.find({});

    res.status(200).send(allProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Product By Id
router.get('/product/:id', async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).json({ message: 'Please Provide Id' });
  try {
    const product = await productModel.findById({ _id: id });

    res.status(200).send(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Product By Id And Update

router.put('/product/update/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const product = await productModel.findByIdAndUpdate(id, req.body);

    if (!product) return res.status(400).json({ message: 'Product Not Found' });

    const updatedProduct = await productModel.findById({ _id: id });

    res.status(200).send(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Product Delete By Id

router.delete('/product/delete/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const product = await productModel.findByIdAndDelete({ _id: id });

    if (!product) return res.status(400).json({ message: 'Product Not Found' });

    const deletedProduct = await productModel.findById({ _id: id });

    res.status(200).send(deletedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
