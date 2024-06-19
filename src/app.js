const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('../config/database');
const productRoutes = require('./routes/productRoutes');

const app = express();

connectDB();

app.use(bodyParser.json());
app.use('/products', productRoutes);

module.exports = app;