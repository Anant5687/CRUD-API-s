const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_CONN);
    console.log('Connected!');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
};

module.exports = connectToDatabase;