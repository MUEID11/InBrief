
const mongoose = require('mongoose');
const dbConnection = async () => {
  try {
    console.log('database is connecting')
    await mongoose
    .connect(process.env.MONGODB_ATLAS_URL);
    console.log('database is connected')
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnection;