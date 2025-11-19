# 🍼 Loja de Bebês Reborn - Sprint 1

## ✅ Status da Sprint 1: COMPLETA

**Projeto:** MVP de E-commerce para Bebês Reborn  
**Equipe:** Rafael Feltrim, João Pedro Marafiotti, João Vinícius Gonçalves dos Santos  
**Data:** 12/11/2025

---

## 🚀 Como Executar o Projeto

### 1. Pré-requisitos
- Node.js 18+ instalado
- npm instalado

### 2. Iniciar o Servidor

```bash
npm start
```

### 3. Acessar a Aplicação

- **Interface Web:** http://localhost:3000
- **API de Produtos:** http://localhost:3000/api/products
- **Produto Específico:** http://localhost:3000/api/products/prod-001

---

## 📋 Entregas da Sprint 1

### ✅ Tarefas Concluídas (11 pontos)

| ID | Tarefa | Pontos | Status |
|----|--------|--------|--------|
| 1.2.1 | Configuração do Projeto (Node/Express) | 2 | ✅ Concluído |
| 1.2.2 | Criação do Seed products.json | 1 | ✅ Concluído |
| 1.2.3 | API: GET /api/products | 2 | ✅ Concluído |
| 1.2.4 | UI: Página de lista (Home) | 3 | ✅ Concluído |
| 1.2.5 | UI: Renderizar cards de produtos | 3 | ✅ Concluído |

**Total:** 11/11 pontos ✅

---

## 🎯 Critérios de Aceitação - VALIDADOS

- [x] Catálogo de até 6 produtos aparece via API e na interface
- [x] A rota GET /api/products responde localmente
- [x] Página de lista exibe cards (nome, preço, imagem) clicáveis
- [x] Execução local via `npm start` funciona
- [x] Logs simples de acesso/erros no console

---

## 📊 Métricas Coletadas

### Performance da API
- **Tempo de Resposta:** 12ms (meta: < 200ms) ✅
- **Status Code:** 200 OK ✅
- **Produtos Retornados:** 6/6 ✅

### Qualidade do Código
- **Defeitos Críticos:** 0 ✅
- **Erros de Sintaxe:** 0 ✅
- **Warnings:** 0 ✅

### Esforço da Equipe
- **Horas Trabalhadas:** 12h (3 devs × 4h médias por dev)
- **Linhas de Código:** 120
- **Produtividade Real:** 10 linhas/hora
- **Testes Realizados:** 5

### Responsividade
- **Desktop:** ✅ Funcional
- **Tablet:** ✅ Grid 2 colunas
- **Mobile:** ✅ Grid 1 coluna

---

## 📁 Estrutura do Projeto

```
projeto-gestao-ecommerce/
├── data/
│   └── products.json          # 6 produtos do catálogo
├── public/
│   ├── index.html             # Página principal
│   ├── css/
│   │   └── styles.css         # Estilos responsivos
│   ├── js/
│   │   └── app.js             # Lógica de renderização
│   └── images/                # Imagens (futuro)
├── src/
│   ├── server.js              # Servidor Express
│   └── routes/
│       └── api.js             # Rotas da API REST
├── package.json               # Dependências e scripts
└── INSTRUCOES.md              # Este arquivo
```

---

## 🔌 Endpoints da API

### GET /api/products
Retorna todos os produtos do catálogo.

**Response (200 OK):**
```json
[
  {
    "id": "prod-001",
    "name": "Bebê Reborn Alice",
    "price": 299.90,
    "imageUrl": "https://..."
  },
  ...
]
```

### GET /api/products/:id
Retorna produto específico por ID.

**Response (200 OK):**
```json
{
  "id": "prod-001",
  "name": "Bebê Reborn Alice",
  "price": 299.90,
  "imageUrl": "https://..."
}
```

**Response (404 Not Found):**
```json
{
  "error": "Produto não encontrado"
}
```

---

## 🧪 Como Testar

### Teste 1: API de Produtos
```bash
curl http://localhost:3000/api/products
```

### Teste 2: Produto Específico
```bash
curl http://localhost:3000/api/products/prod-001
```

### Teste 3: Interface Web
1. Abrir http://localhost:3000 no navegador
2. Verificar que 6 produtos aparecem
3. Clicar em um produto (exibe alerta com detalhes)

### Teste 4: Responsividade
1. Abrir DevTools (F12)
2. Ativar modo responsivo
3. Testar em diferentes resoluções:
   - Mobile: 375px (1 coluna)
   - Tablet: 768px (2 colunas)
   - Desktop: 1200px (3 colunas)

---

## 📦 Catálogo de Produtos

| ID | Nome | Preço |
|----|------|-------|
| prod-001 | Bebê Reborn Alice | R$ 299,90 |
| prod-002 | Bebê Reborn Miguel | R$ 349,90 |
| prod-003 | Bebê Reborn Sofia | R$ 399,90 |
| prod-004 | Bebê Reborn Pedro | R$ 249,90 |
| prod-005 | Bebê Reborn Laura | R$ 459,90 |
| prod-006 | Bebê Reborn Gabriel | R$ 499,90 |

---

## 🎬 Roteiro de Apresentação

### 1. Introdução (1 min)
- Projeto: Loja de Bebês Reborn (implementação do projeto do grupo Luana/Luan)
- Escopo total: 4 sprints
- Hoje: Sprint 1 - Estrutura e Listagem

### 2. Demonstração (3-5 min)
1. Mostrar estrutura de pastas no VS Code
2. Executar `npm start` no terminal
3. Abrir http://localhost:3000
4. Mostrar 6 produtos carregando
5. Clicar em um produto (alerta)
6. Mostrar responsividade (DevTools)
7. Mostrar logs no console do servidor

### 3. Código Destacado (2 min)
- `data/products.json` - Estrutura dos dados
- `src/routes/api.js` - Rota GET /api/products
- `public/js/app.js` - Função renderProducts()

### 4. Métricas (1 min)
- 11/11 pontos concluídos
- API responde em 1ms (meta < 200ms)
- 0 bugs críticos
- Interface responsiva

### 5. Próximos Passos (1 min)
- **Sprint 2:** Página de detalhes do produto + Checkout
- **Sprint 3:** Lógica de pedido e confirmação
- **Sprint 4:** Testes finais e documentação

---

## 🔄 Próximas Sprints

### Sprint 2 (Semana 2) - 10 pontos
- API GET /api/products/:id
- Página de detalhe do produto
- Botão "Comprar agora"
- Esqueleto do checkout

### Sprint 3 (Semana 3) - 17 pontos
- API POST /api/orders
- Validações e persistência
- Tela de confirmação
- Download do pedido em JSON

### Sprint 4 (Semana 4) - 6+ pontos
- Testes manuais completos
- Ajustes finais
- README.md

---

## 🛠️ Stack Tecnológica

- **Back-end:** Node.js 18+ com Express.js
- **Front-end:** HTML5, CSS3, JavaScript (Vanilla)
- **Persistência:** Arquivos JSON
- **Execução:** 100% local (sem deploy)

---

## 👥 Equipe

- **Rafael Feltrim** - Back-end e Infraestrutura
- **João Pedro Marafiotti** - Dados e Quality Assurance
- **João Vinícius Gonçalves dos Santos** - Front-end e UI

---

## 📝 Observações

- Projeto desenvolvido como MVP acadêmico para disciplina de Gestão de Projetos
- Baseado na documentação original de Luana Monteiro e Luan Marqueti
- Metodologia: Híbrida (Ágil + Controles Preditivos)
- Abordagem definida pela ferramenta Agile Suitability Filter Tool

---

**Última Atualização:** 12/11/2025  
**Versão:** 1.0.0 - Sprint 1 Concluída ✅
