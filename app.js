const express = require('express');
const ProductManager = require('./ProductManager');
const app = express();
const PORT = 3003;
const productManager = new ProductManager();

app.get('/products', (req, res) => {
  const { limit } = req.query;
  const products = productManager.getProducts(limit ? parseInt(limit, 10) : undefined);
  console.log('Productos obtenidos:', products); 
  res.json({ products });
});

app.get('/products/:pid', (req, res) => {
  const productId = parseInt(req.params.pid, 10);
  const product = productManager.getProductById(productId);

  if (product) {
    console.log('Producto encontrado:', product); 
    res.json(product);
  } else {
    console.log('Producto no encontrado para el ID:', productId); 
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
