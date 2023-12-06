const fs = require('fs');

class ProductManager {
  constructor(filePath = '../proyecto3/productos.json') {
    this.filePath = filePath;
    this.products = [];
    this.loadProducts();
  }

  loadProducts() {
    if (fs.existsSync(this.filePath)) {
      const data = fs.readFileSync(this.filePath, 'utf-8');
      this.products = JSON.parse(data);
      console.log('Productos cargados:', this.products); 
    }
  }

  getProducts(limit) {
    return limit ? this.products.slice(0, limit) : this.products;
  }

  getProductById(id) {
    return this.products.find(product => product.id === id);
  }

  addProduct(newProduct) {
    this.products.push(newProduct);
    this.saveToFile();
  }

  saveToFile() {
    fs.writeFileSync(this.filePath, JSON.stringify(this.products, null, 2), 'utf-8');
  }
}

module.exports = ProductManager;
