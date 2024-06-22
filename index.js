require('dotenv').config();
const express = require('express');
const app = express();
const connectToDatabase = require('./db/conn');
const port = process.env.PORT || 5000;

const routes = require('./routes/index.js'); // Ensure this is correct

app.use(express.json());

const startServer = async () => {
  await connectToDatabase();

  app.use('/', routes); // Ensure routes is a valid middleware

  app.get('/', (req, res) => {
    res.status(200).json([{ name: 'Anant', age: 23 }]);
  });

  app.listen(port, () => {
    console.log(`App is running on port ${port}`);
  });
};

startServer();