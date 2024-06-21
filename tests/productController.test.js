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
  });


});
