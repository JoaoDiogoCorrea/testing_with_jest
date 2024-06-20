const initializeServer = require('./app');

const PORT = process.env.PORT || 8000;
const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/productCatalog';

initializeServer(DB_URI).then((app) => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});