const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('../config/database');
const productRoutes = require('./routes/productRoutes');

const app = express();

const initializeServer = async (dbUri) => {
  await connectDB(dbUri);

  app.use(bodyParser.json());
  app.use('/products', productRoutes);

  return app;
};

module.exports = initializeServer;