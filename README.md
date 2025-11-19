# 🍼 Loja de Bebês Reborn - E-commerce MVP

<<<<<<< HEAD
![Status](https://img.shields.io/badge/Status-Completo-success)
=======
![Status](https://img.shields.io/badge/Status-Sprint%202%20Concluída-success)
>>>>>>> sprint-2
![Node](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)

## 📋 Sobre o Projeto

MVP de e-commerce para venda de bebês Reborn desenvolvido como projeto acadêmico da disciplina de Gestão de Projetos.

<<<<<<< HEAD
**Sprint 1:** Implementação da base do sistema com backend Express, API REST e frontend responsivo para exibição do catálogo de produtos.
MVP de e-commerce para venda de bebês Reborn desenvolvido como projeto acadêmico da disciplina de Gestão de Projetos.

**Sprint 1:** Implementação da base do sistema com backend Express, API REST e frontend responsivo para exibição do catálogo de produtos.
=======
MVP de e-commerce para venda de bebês Reborn desenvolvido como projeto acadêmico da disciplina de Gestão de Projetos.

**Sprint 1:** Implementação da base do sistema com backend Express, API REST e frontend responsivo para exibição do catálogo de produtos.
>>>>>>> sprint-1
=======
**Sprint 2:** Implementação da página de detalhes do produto e formulário de checkout completo com validações e máscaras automáticas.
>>>>>>> sprint-2

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
│   └── products.json          # Catálogo com 6 produtos
├── public/
│   ├── index.html             # Página principal da loja
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
│       └── api.js             # Rotas da API REST
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
- 11 Story Points concluídos (100%)
- ~700 linhas de código
- 0 defeitos críticos
- Performance excepcional (API < 2ms)

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
- 3 novas páginas (produto, checkout)
- 0 defeitos críticos

### 📌 Próximas Sprints

**Sprint 3:** Lógica de pedidos e confirmação  
**Sprint 4:** Testes e documentação final

---

## 🔌 Documentação da API

### GET /api/products

Retorna todos os produtos do catálogo.

**Resposta (200 OK):**
``json
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

Cria um novo pedido.

**Request Body:**
```
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
```

```

---

## 🧪 Como Testar

### Teste da API:
```bash
curl http://localhost:3000/api/products
curl http://localhost:3000/api/products/prod-001
```

### Teste da Interface:
1. Abra http://localhost:3000 no navegador
2. Clique em qualquer produto do catálogo
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
- **Dados:** JSON

---

## 📊 Métricas (Sprint 1)

| Métrica | Valor |
|---------|-------|
| Story Points | 11/11 (100%) |
| Linhas de Código | 120 |
| Horas | 12h |
| Produtividade | 10 linhas/hora |
| Defeitos | 0 |
| Testes | 5/5 passando |

---

## 📊 Métricas (Sprint 2)

| Métrica | Valor |
|---------|-------|
| Story Points | 10/10 (100%) |
| Linhas de Código | 180 |
| Horas | 15h |
| Produtividade | 12 linhas/hora |
| Defeitos | 0 |
| Testes | 7/7 passando |

---

## 📊 Métricas (Sprint 1 + Sprint 2)

| Métrica | Sprint 1 | Sprint 2 | Total |
|---------|----------|----------|-------|
| Story Points | 11 | 10 | 21 |
| Linhas de Código | 120 | 180 | 300 |
| Horas | 12h | 15h | 27h |
| Produtividade | 10 linhas/hora | 12 linhas/hora | 11.1 linhas/hora |
| Defeitos | 0 | 0 | 0 |
| Testes | 5/5 passando | 7/7 passando | 12/12 passando |

---

## 📊 Métricas (Sprint 1 + Sprint 2 + Sprint 3)

| Métrica | Sprint 1 | Sprint 2 | Sprint 3 | Total |
|---------|----------|----------|----------|-------|
| Story Points | 11 | 10 | 17 | 38 |
| Linhas de Código | 120 | 180 | 250 | 550 |
| Horas | 12h | 15h | 20h | 47h |
| Produtividade | 10 linhas/hora | 12 linhas/hora | 12.5 linhas/hora | 11.7 linhas/hora |
| Defeitos | 0 | 0 | 0 | 0 |
| Testes | 5/5 passando | 7/7 passando | 10/10 passando | 22/22 passando |

---

## 📊 Métricas (Sprint 1 + Sprint 2 + Sprint 3 + Sprint 4)

| Métrica | Sprint 1 | Sprint 2 | Sprint 3 | Sprint 4 | Total |
|---------|----------|----------|----------|----------|-------|
| Story Points | 11 | 10 | 17 | 6 | 44 |
| Linhas de Código | 120 | 180 | 250 | 150 | 700 |
| Horas | 12h | 15h | 20h | 10h | 57h |
| Produtividade | 10 linhas/hora | 12 linhas/hora | 12.5 linhas/hora | 15 linhas/hora | 12.3 linhas/hora |
| Defeitos | 0 | 0 | 0 | 0 | 0 |
| Testes | 5/5 passando | 7/7 passando | 10/10 passando | 12/12 passando | 34/34 passando |

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

**Versão:** 4.0.0 - Sprint 4 ✅