const express = require('express');
const productRouter = express.Router();
const productListModel = require('../models/productList.model.js');

productRouter.post('/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    const add = await productListModel.create({
      payload: req.body.payload,
      productId,
    });
    res.status(200).send(add);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
});

productRouter.get('/productId/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    if (!productId)
      return res.status(400).json({ message: 'Product Id is required' });
    const get = await productListModel.findOne({
      productId,
    });
    if (!get) return res.status(400).json({ message: 'Product Not Found' });
    res.status(200).send(get);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
});

productRouter.delete('/productId/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    if (!productId)
      return res.status(400).json({ message: 'Product Id is required' });
    const get = await productListModel.findOneAndDelete({
      productId,
    });
    res.status(200).send(get);
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
});

module.exports = productRouter;
