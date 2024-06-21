const Product = require('../models/product');

const createProduct = async (data) => {
  const product = new Product(data);
  await product.save();
  return product;
};

const getProductById = async (id) => {
  return await Product.findById(id);
};

const getProducts = async () => {
  return await Product.find();
}

module.exports = {
  createProduct,
  getProductById,
  getProducts
};
