const request = require('supertest');
const mongoose = require('mongoose');
const initializeServer = require('../src/app');
const Product = require('../src/models/product');

const DB_URI_TEST = 'mongodb://localhost:27017/productCatalogTest';

let app;

describe('Product API', () => {
  // Executado antes de todos os testes
  beforeAll(async () => {
    app = await initializeServer(DB_URI_TEST);
    await mongoose.connection.db.dropDatabase();
  });

  // Executado depois de todos os testes
  afterAll(async () => {
    await mongoose.connection.db.dropDatabase(); // Limpa o banco de dados de teste
    await mongoose.connection.close(); // Fecha a conexão com o banco de dados
  });

  // Executado antes de cada teste
  beforeEach(async () => {
    await mongoose.connection.db.dropDatabase(); // Limpa o banco de dados de teste
  });

  it('should create a new product', async () => {
    const res = await request(app)
      .post('/products')
      .send({
        name: 'Test Product',
        price: 100,
        description: 'This is a test product',
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('name', 'Test Product');
    expect(res.body).toHaveProperty('price', 100);
  });

  it('should create a new product without description', async () => {
    const res = await request(app)
      .post('/products')
      .send({
        name: 'Test Product',
        price: 100,
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('name', 'Test Product');
    expect(res.body).toHaveProperty('price', 100);
  });

  it('not should create a new product with price empty', async () => {
    const res = await request(app)
      .post('/products')
      .send({ price: 100});

    expect(res.statusCode).toEqual(500);
  });

  it('not should create a new product with name empty', async () => {
    const res = await request(app)
      .post('/products')
      .send({ name: 'Test Product'});

    expect(res.statusCode).toEqual(500);
  });

  it('should fetch all products', async () => {
    const res = await request(app)
      .get('/products')

    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should update a product', async () => {
    const product = new Product({ name: 'Produto para ser alterado', price: 400, description: 'Este produto vai ser alterado' });
    await product.save();

    const res = await request(app)
      .put(`/products/${product._id}`)
      .send({ name: 'Produto Alterado', price: 410, description: 'Este produto foi alterado' });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'Produto Alterado');
    expect(res.body).toHaveProperty('price', 410);
    expect(res.body).toHaveProperty('description', 'Este produto foi alterado' );
  });

  it('should delete a product', async () => {
    const product = new Product({ name: 'Produto para ser deletado', price: 400, description: 'Este produto vai ser deletado' });
    await product.save();

    const res = await request(app).delete(`/products/${product._id}`);

    expect(res.statusCode).toEqual(204);
  });


});
