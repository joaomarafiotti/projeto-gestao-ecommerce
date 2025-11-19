const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const router = express.Router();

// GET /api/products - Retorna todos os produtos
router.get('/products', async (req, res) => {
  try {
    const startTime = Date.now();
    
    // Lê o arquivo products.json
    const productsPath = path.join(__dirname, '../../data/products.json');
    const data = await fs.readFile(productsPath, 'utf-8');
    const products = JSON.parse(data);
    
    const duration = Date.now() - startTime;
    console.log(`[API] GET /api/products - ${products.length} produtos retornados em ${duration}ms`);
    
    res.status(200).json(products);
  } catch (error) {
    console.error('[API] Erro ao buscar produtos:', error.message);
    res.status(500).json({
      error: 'Erro ao carregar produtos',
      message: error.message
    });
  }
});

// GET /api/products/:id - Retorna produto específico (Sprint 2)
router.get('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const productsPath = path.join(__dirname, '../../data/products.json');
    const data = await fs.readFile(productsPath, 'utf-8');
    const products = JSON.parse(data);
    
    const product = products.find(p => p.id === id);
    
    if (!product) {
      console.log(`[API] Produto ${id} não encontrado`);
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    
    console.log(`[API] GET /api/products/${id} - Produto encontrado`);
    res.status(200).json(product);
  } catch (error) {
    console.error('[API] Erro ao buscar produto:', error.message);
    res.status(500).json({
      error: 'Erro ao carregar produto',
      message: error.message
    });
  }
});

module.exports = router;
