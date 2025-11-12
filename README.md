# 🍼 Loja de Bebês Reborn - E-commerce MVP

![Status](https://img.shields.io/badge/Status-Sprint%201%20Concluída-success)
![Node](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)

## 📋 Sobre o Projeto

MVP de e-commerce para venda de bebês Reborn desenvolvido como projeto acadêmico da disciplina de Gestão de Projetos. O sistema permite visualizar um catálogo de produtos, ver detalhes e realizar compras de forma simples e intuitiva.

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

### Acessando a Aplicação

- **Interface Web:** http://localhost:3000
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
│   ├── css/
│   │   └── styles.css         # Estilos responsivos
│   └── js/
│       └── app.js             # Lógica de renderização dos produtos
├── src/
│   ├── server.js              # Servidor Express (ponto de entrada)
│   └── routes/
│       └── api.js             # Rotas da API REST
├── package.json               # Dependências e scripts
├── INSTRUCOES.md              # Documentação detalhada da Sprint 1
├── CHECKLIST-SPRINT-1.md      # Checklist de validação
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

### 🔜 Sprint 2 (12/11 - 18/11/2025)

- Página de detalhes do produto
- Botão "Comprar agora"
- Formulário de checkout (esqueleto)
- Validações de entrada no frontend

### 🔜 Sprint 3 (19/11 - 25/11/2025)

- API POST /api/orders
- Validação de dados do pedido
- Persistência de pedidos em JSON
- Tela de confirmação de compra
- Download do pedido em JSON

### 🔜 Sprint 4 (26/11 - 02/12/2025)

- Testes automatizados
- Documentação técnica completa
- Ajustes finais de UX

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
2. Verifique se 6 produtos aparecem
3. Clique em um produto
4. Teste responsividade (F12 > Device Toolbar)

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

## 📈 Métricas (Sprint 1)

| Métrica | Valor |
|---------|-------|
| Story Points | 11/11 (100%) |
| Linhas de Código | 689 |
| Horas | 6h |
| Produtividade | 114.8 linhas/hora |
| Defeitos | 0 |
| Testes | 19/19 passando |

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

**Versão:** 1.0.0 - Sprint 1 ✅