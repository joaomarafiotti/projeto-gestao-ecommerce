# 🍼 Loja de Bebês Reborn - E-commerce MVP

![Status](https://img.shields.io/badge/Status-Sprint%203%20Concluída-success)
![Status](https://img.shields.io/badge/Status-Sprint%202%20Concluída-success)
![Status](https://img.shields.io/badge/Status-Completo-success)
![Node](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)

## 📋 Sobre o Projeto

MVP de e-commerce para venda de bebês Reborn desenvolvido como projeto acadêmico da disciplina de Gestão de Projetos.

**Sprint 3:** Implementação da lógica de pedidos com API POST, persistência em JSON, página de confirmação e funcionalidade de download do pedido.
**Sprint 2:** Implementação da página de detalhes do produto e formulário de checkout completo com validações e máscaras automáticas.
MVP de e-commerce completo para venda de bebês Reborn desenvolvido como projeto acadêmico da disciplina de Gestão de Projetos. O sistema permite visualizar catálogo, ver detalhes, realizar compras e confirmar pedidos.

**Equipe de Desenvolvimento:**
- Rafael Feltrim - Backend e Infraestrutura
- João Pedro Marafiotti - Dados e Quality Assurance
- João Vinícius Gonçalves dos Santos - Frontend e UI/UX

**Período:** Novembro de 2025  
**Metodologia:** Híbrida (Ágil + Controles Preditivos)

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- **Node.js** versão 18 ou superior
- **npm** (gerenciador de pacotes do Node)

### Instalação

1. Clone o repositório ou extraia os arquivos do projeto

2. Navegue até a pasta do projeto:
```bash
cd projeto-gestao-ecommerce
```

3. Instale as dependências:
```bash
npm install
```

### Executando a Aplicação

Inicie o servidor:
```bash
npm start
```

O servidor será iniciado na porta 3000. Você verá a seguinte mensagem:

```
============================================================
🚀 Servidor da Loja de Bebês Reborn iniciado!
============================================================
📡 Servidor rodando em: http://localhost:3000
📂 Arquivos estáticos: public/
🔌 API REST: http://localhost:3000/api
============================================================
```

## 💾 Acessando a Aplicação

- **Interface Web:** http://localhost:3000
- **Página de Produto:** http://localhost:3000/produto.html?id=prod-001
- **Checkout:** http://localhost:3000/checkout.html?id=prod-001
- **API de Produtos:** http://localhost:3000/api/products
- **Produto Específico:** http://localhost:3000/api/products/prod-001

---

## 📁 Estrutura do Projeto

```
projeto-gestao-ecommerce/
├── data/
│   ├── products.json          # Catálogo com 6 produtos
│   └── orders.json            # Pedidos realizados (NOVO)
├── public/
│   ├── index.html             # Página principal da loja
│   ├── produto.html           # Página de detalhes do produto
│   ├── checkout.html          # Página de checkout
│   ├── confirmacao.html       # Página de confirmação (NOVO)
│   ├── css/
│   │   ├── styles.css         # Estilos da página principal
│   │   ├── produto.css        # Estilos da página de produto
│   │   ├── checkout.css       # Estilos do checkout
│   │   └── confirmacao.css    # Estilos da confirmação (NOVO)
│   └── js/
│       ├── app.js             # Lógica da página principal
│       ├── produto.js         # Lógica de detalhes
│       ├── checkout.js        # Lógica do checkout (integrado com API)
│       └── confirmacao.js     # Lógica da confirmação (NOVO)
│   ├── produto.html           # Página de detalhes do produto (NOVO)
│   ├── checkout.html          # Página de checkout (NOVO)
│   ├── css/
│   │   ├── styles.css         # Estilos da página principal
│   │   ├── produto.css        # Estilos da página de produto (NOVO)
│   │   └── checkout.css       # Estilos do checkout (NOVO)
│   └── js/
│       ├── app.js             # Lógica da página principal
│       ├── produto.js         # Lógica de detalhes (NOVO)
│       └── checkout.js        # Lógica do checkout (NOVO)
├── src/
│   ├── server.js              # Servidor Express
│   └── routes/
│       └── api.js             # Rotas da API REST (GET + POST)
├── package.json               # Dependências e scripts
└── README.md                  # Este arquivo
```

---

## 🎯 Funcionalidades

### ✅ Sistema Completo (Todas as Sprints)

**Backend:**
- ✅ Servidor Express configurado na porta 3000
- ✅ API REST para listagem de produtos (GET /api/products)
- ✅ API REST para produto específico (GET /api/products/:id)
- ✅ API REST para criar pedidos (POST /api/orders)
- ✅ Sistema de logs de requisições
- ✅ Tratamento de erros (404, 500)
- ✅ Validação completa de dados

**Frontend:**
- ✅ Página inicial responsiva com catálogo
- ✅ Grid de produtos com 6 bebês Reborn
- ✅ Página de detalhes do produto
- ✅ Formulário de checkout completo
- ✅ Página de confirmação de pedido
- ✅ Validações de formulário (email, telefone, CEP)
- ✅ Máscaras automáticas nos inputs
- ✅ Download do pedido em JSON
- ✅ Design responsivo (Desktop/Tablet/Mobile)

**Dados:**
- ✅ Estrutura JSON com 6 produtos (products.json)
- ✅ Persistência de pedidos (orders.json)

**Métricas:**
- 44 Story Points concluídos (100%)
- ~2.500 linhas de código
- 0 defeitos críticos

### ✅ Sprint 2 (12/11 - 18/11/2025) - CONCLUÍDA

**Frontend:**
- ✅ Página de detalhes do produto (produto.html)
- ✅ Galeria de imagens do produto
- ✅ Informações detalhadas (descrição, características)
- ✅ Botão "Comprar Agora" funcional
- ✅ Formulário de checkout completo (checkout.html)
- ✅ Validações de formulário (email, telefone, CEP)
- ✅ Máscaras automáticas nos inputs
- ✅ Navegação entre páginas com query params
- ✅ Resumo do pedido dinâmico

**Métricas Sprint 2:**
- 10 Story Points concluídos
- +1.100 linhas de código
- 3 novas páginas
- 0 defeitos críticos

### ✅ Sprint 3 (19/11 - 25/11/2025) - CONCLUÍDA

**Backend:**
- ✅ API POST /api/orders
- ✅ Validação completa de dados do pedido
- ✅ Validação de campos obrigatórios (produto, cliente, endereço)
- ✅ Geração de ID único para pedidos
- ✅ Persistência de pedidos em JSON (orders.json)
- ✅ Tratamento de erros (400, 500)

**Frontend:**
- ✅ Integração do checkout com API POST
- ✅ Página de confirmação de pedido (confirmacao.html)
- ✅ Exibição de dados do pedido confirmado
- ✅ Download do pedido em JSON
- ✅ Estados de loading e erro
- ✅ Feedback visual para o usuário

**Métricas Sprint 3:**
- 17 Story Points concluídos
- 250 linhas de código
- API completamente funcional
- 0 defeitos críticos

### 📌 Próxima Sprint

**Sprint 4:** Testes e documentação final

**Frontend:**
- ✅ Página de detalhes do produto (produto.html)
- ✅ Galeria de imagens do produto
- ✅ Informações detalhadas (descrição, características)
- ✅ Botão "Comprar Agora" funcional
- ✅ Formulário de checkout completo (checkout.html)
- ✅ Validações de formulário (email, telefone, CEP)
- ✅ Máscaras automáticas nos inputs
- ✅ Navegação entre páginas com query params
- ✅ Resumo do pedido dinâmico

**Métricas Sprint 2:**
- 10 Story Points concluídos
- +1.100 linhas de código
- 3 novas páginas (produto, checkout)
- 0 defeitos críticos

### 📌 Próximas Sprints

**Sprint 3:** Lógica de pedidos e confirmação  
**Sprint 4:** Testes e documentação final
- Performance excepcional (API < 2ms)

---

## 🔌 Documentação da API

### GET /api/products

Retorna todos os produtos do catálogo.

**Resposta (200 OK):**
```
[
  {
    "id": "prod-001",
    "name": "Bebê Reborn Alice",
    "price": 299.90,
    "imageUrl": "https://..."
  }
]
```

### GET /api/products/:id

Retorna um produto específico por ID.

**Resposta (200 OK):**
```json
{
  "id": "prod-001",
  "name": "Bebê Reborn Alice",
  "price": 299.90,
  "imageUrl": "https://..."
}
```

### POST /api/orders

Cria um novo pedido e persiste em JSON.
Cria um novo pedido.

**Request Body:**
```json
{
  "produto": {
    "id": "prod-001",
    "name": "Bebê Reborn Alice",
    "price": 299.90,
    "imageUrl": "https://..."
  },
  "cliente": {
    "nome": "João Silva",
    "email": "joao@example.com",
    "telefone": "(11) 98765-4321"
  },
  "endereco": {
    "cep": "01234-567",
    "estado": "SP",
    "cidade": "São Paulo",
    "endereco": "Rua Exemplo",
    "numero": "123",
    "complemento": "Apto 45"
  },
  "total": 299.90
}
```

**Resposta (201 Created):**
```json
{
  "success": true,
  "message": "Pedido criado com sucesso",
  "order": {
    "id": "order-1234567890-abc123",
    "status": "pendente",
    "createdAt": "2025-11-16T12:00:00.000Z",
    "produto": { ... },
    "cliente": { ... },
    "endereco": { ... },
    "total": 299.90
    ...
  }
}
```

---

## 🧪 Como Testar

### Teste da API:
```
# Listar produtos
curl http://localhost:3000/api/products

# Produto específico
curl http://localhost:3000/api/products/prod-001

# Criar pedido
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{"produto":{"id":"prod-001","name":"Bebê Reborn Alice","price":299.90},"cliente":{"nome":"Teste","email":"teste@test.com","telefone":"11987654321"},"endereco":{"cep":"01234567","estado":"SP","cidade":"São Paulo","endereco":"Rua Teste","numero":"123"},"total":299.90}'
```

### Teste da Interface:
1. Abra http://localhost:3000 no navegador
2. Clique em qualquer produto do catálogo
3. Veja os detalhes do produto
4. Clique em "Comprar Agora"
5. Preencha o formulário de checkout
6. Clique em "Finalizar Compra"
7. Veja a confirmação do pedido
8. Baixe o pedido em JSON
9. Teste responsividade (F12 > Device Toolbar)
3. Veja os detalhes do produto (galeria, descrição, preço)
4. Clique em "Comprar Agora"
5. Preencha o formulário de checkout
6. Teste as validações (email inválido, campos vazio)
7. Verifique as máscaras (telefone, CEP)
8. Teste responsividade (F12 > Device Toolbar)

---

## 📊 Catálogo de Produtos

| ID | Nome | Preço |
|----|------|-------|
| prod-001 | Bebê Reborn Alice | R$ 299,90 |
| prod-002 | Bebê Reborn Miguel | R$ 349,90 |
| prod-003 | Bebê Reborn Sofia | R$ 399,90 |
| prod-004 | Bebê Reborn Pedro | R$ 249,90 |
| prod-005 | Bebê Reborn Laura | R$ 459,90 |
| prod-006 | Bebê Reborn Gabriel | R$ 499,90 |

---

## 🛠️ Tecnologias

- **Backend:** Node.js 18+ / Express.js 4.x
- **Frontend:** HTML5 / CSS3 / JavaScript ES6+
- **Dados:** JSON (products.json + orders.json)
- **API:** REST com GET e POST

---

## 📊 Métricas (Sprint 1 + 2 + 3)

| Métrica | Sprint 1 | Sprint 2 | Sprint 3 | Total |
|---------|----------|----------|----------|-------|
| Story Points | 11 | 10 | 17 | 38 |
| Linhas de Código | 120 | 180 | 250 | 550 |
| Horas | 12h | 15h | 20h | 47h |
| Produtividade | 10 linhas/hora | 12 linhas/hora | 12.5 linhas/hora | 11.7 linhas/hora |
| Defeitos | 0 | 0 | 0 | 0 |
| Testes | 5/5 passando | 7/7 passando | 10/10 passando | 22/22 passando |
## 📊 Métricas (Sprint 1 + Sprint 2)

| Métrica | Sprint 1 | Sprint 2 | Total |
|---------|----------|----------|-------|
| Story Points | 11 | 10 | 21 |
| Linhas de Código | 689 | 1.100+ | 1.789+ |
| Páginas HTML | 1 | +2 | 3 |
| Arquivos CSS | 1 | +2 | 3 |
| Arquivos JS | 1 | +2 | 3 |
| Defeitos | 0 | 0 | 0 |

---

## 🐛 Solução de Problemas

**Porta em uso:** Mude a porta no `src/server.js`  
**Produtos não aparecem:** Verifique se o servidor está rodando  
**Imagens não carregam:** Verifique conexão com internet

---

**Equipe:**
- Rafael Feltrim
- João Pedro Marafiotti
- João Vinícius Gonçalves dos Santos

**Versão:** 3.0.0 - Sprint 3 ✅
**Versão:** 2.0.0 - Sprint 2 ✅
