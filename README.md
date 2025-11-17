# 🍼 Loja de Bebês Reborn - E-commerce MVP

![Status](https://img.shields.io/badge/Status-Sprint%202%20Concluída-success)
![Node](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)

## 📋 Sobre o Projeto

MVP de e-commerce para venda de bebês Reborn desenvolvido como projeto acadêmico da disciplina de Gestão de Projetos.

**Sprint 2:** Implementação da página de detalhes do produto e formulário de checkout completo com validações e máscaras automáticas.

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

### ✅ Sprint 1 (06/11 - 11/11/2025) - CONCLUÍDA

**Backend:**
- ✅ Servidor Express configurado na porta 3000
- ✅ API REST para listagem de produtos (GET /api/products)
- ✅ API REST para produto específico (GET /api/products/:id)
- ✅ Sistema de logs de requisições
- ✅ Tratamento de erros (404, 500)

**Frontend:**
- ✅ Página inicial responsiva com catálogo
- ✅ Grid de produtos com 6 bebês Reborn
- ✅ Cards interativos com hover
- ✅ Formatação de preços em Real (R$)
- ✅ Estados de loading e erro
- ✅ Design responsivo (Desktop/Tablet/Mobile)

**Dados:**
- ✅ Estrutura JSON com 6 produtos

**Métricas Sprint 1:**
- 11 Story Points concluídos
- 689 linhas de código
- 6 horas de desenvolvimento
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
```json
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

**Versão:** 2.0.0 - Sprint 2 ✅