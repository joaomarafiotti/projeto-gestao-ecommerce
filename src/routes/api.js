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

// POST /api/orders - Cria um novo pedido
router.post('/orders', async (req, res) => {
  try {
    const order = req.body;
    
    // Validar dados obrigatórios
    if (!order.produto || !order.cliente || !order.endereco) {
      return res.status(400).json({ 
        error: 'Dados incompletos',
        message: 'Produto, cliente e endereço são obrigatórios'
      });
    }
    
    // Validar campos do cliente
    if (!order.cliente.nome || !order.cliente.email || !order.cliente.telefone) {
      return res.status(400).json({ 
        error: 'Dados do cliente incompletos',
        message: 'Nome, email e telefone são obrigatórios'
      });
    }
    
    // Validar campos do endereço
    if (!order.endereco.cep || !order.endereco.estado || !order.endereco.cidade || 
        !order.endereco.endereco || !order.endereco.numero) {
      return res.status(400).json({ 
        error: 'Dados do endereço incompletos',
        message: 'CEP, estado, cidade, endereço e número são obrigatórios'
      });
    }
    
    // Gerar ID único para o pedido
    const orderId = `order-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Adicionar ID e timestamp ao pedido
    const newOrder = {
      id: orderId,
      ...order,
      status: 'pendente',
      createdAt: new Date().toISOString()
    };
    
    // Ler pedidos existentes
    const ordersPath = path.join(__dirname, '../../data/orders.json');
    let orders = [];
    
    try {
      const data = await fs.readFile(ordersPath, 'utf-8');
      orders = JSON.parse(data);
    } catch (error) {
      // Se arquivo não existe, criar array vazio
      if (error.code !== 'ENOENT') throw error;
    }
    
    // Adicionar novo pedido
    orders.push(newOrder);
    
    // Salvar pedidos
    await fs.writeFile(ordersPath, JSON.stringify(orders, null, 2), 'utf-8');
    
    console.log(`[API] POST /api/orders - Pedido ${orderId} criado com sucesso`);
    
    res.status(201).json({
      success: true,
      message: 'Pedido criado com sucesso',
      order: newOrder
    });
  } catch (error) {
    console.error('[API] Erro ao criar pedido:', error.message);
    res.status(500).json({ 
      error: 'Erro ao processar pedido',
      message: error.message 
    });
  }
});

module.exports = router;
