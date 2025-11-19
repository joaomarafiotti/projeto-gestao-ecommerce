const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = 3000;

// Middleware para parsing de JSON
app.use(express.json());

// Middleware para logs de requisições
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, '../public')));

// Rotas da API
app.use('/api', apiRoutes);

// Rota raiz - redireciona para index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Tratamento de erro 404
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

// Tratamento de erros gerais
app.use((err, req, res, next) => {
  console.error('[ERRO]', err.stack);
  res.status(500).json({
    error: 'Erro interno do servidor'
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log('='.repeat(60));
  console.log('🚀 Servidor da Loja de Bebês Reborn iniciado!');
  console.log('='.repeat(60));
  console.log(`📡 Servidor rodando em: http://localhost:${PORT}`);
  console.log(`📂 Arquivos estáticos: public/`);
  console.log(`🔌 API REST: http://localhost:${PORT}/api`);
  console.log('='.repeat(60));
  console.log('Endpoints disponíveis:');
  console.log(`  GET  /api/products      - Lista todos os produtos`);
  console.log(`  GET  /api/products/:id  - Busca produto por ID`);
  console.log('='.repeat(60));
  console.log('Pressione Ctrl+C para parar o servidor\n');
});
