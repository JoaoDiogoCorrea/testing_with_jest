const productService = require('../services/productService');

const createProduct = async (req, res) => {
  try {
    console.log("createProduct")
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    if(!products) {
      return res.status(404).json({ error: 'Products not found' });
    }
    res.status(200).json(products);
  }catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const deleteProduct = async (req, res) => {
  try {
    const product = await productService.deleteProduct(req.params.id);
    if(!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
} 

module.exports = {
  createProduct,
  getProductById,
  getProducts,
  deleteProduct
};