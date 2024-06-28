require('dotenv').config();
const express = require('express');
const app = express();
const connectToDatabase = require('./db/conn');
const port = process.env.PORT || 5000;

const routes = require('./routes/index.js'); // Ensure this is correct
const productRouter = require('./routes/products.js');

app.use(express.json());

const startServer = async () => {
  await connectToDatabase();

  app.use('/', routes); // Ensure routes is a valid middleware
  app.use('/product', productRouter);

  app.listen(port, () => {
    console.log(`App is running on port ${port}`);
  });
};

startServer();