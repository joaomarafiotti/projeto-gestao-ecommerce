# 📸 GUIA RÁPIDO - CAPTURA DE EVIDÊNCIAS

**Para:** Apresentação da Entrega-06 (18/11/2025)  
**Equipe:** Rafael, João Pedro, João Vinícius

---

## 🎯 OBJETIVO

Este guia mostra **exatamente** como capturar evidências visuais para complementar os relatórios.

---

## 🚀 PASSO A PASSO

### 1. Iniciar o Servidor

```bash
cd c:\Users\Submarino\Desktop\Geral\Projetos\projeto-gestao-ecommerce
npm start
```

**Printar:** Console mostrando:
```
============================================================
🚀 Servidor da Loja de Bebês Reborn iniciado!
============================================================
📡 Servidor rodando em: http://localhost:3000
```

**Salvar como:** `evidencias/01_servidor_iniciado.png`

---

### 2. Testar API no Terminal

**Comando 1 - Listar todos os produtos:**
```bash
curl http://localhost:3000/api/products
```

**Printar:** Output do JSON com 6 produtos

**Salvar como:** `evidencias/02_api_produtos.png`

---

**Comando 2 - Buscar produto específico:**
```bash
curl http://localhost:3000/api/products/prod-001
```

**Printar:** Output do JSON com 1 produto

**Salvar como:** `evidencias/03_api_produto_id.png`

---

**Comando 3 - Testar 404:**
```bash
curl http://localhost:3000/api/products/prod-999
```

**Printar:** Output do erro 404

**Salvar como:** `evidencias/04_api_404.png`

---

### 3. Testar Interface no Navegador

**Abrir:** http://localhost:3000

**Print 1 - Página inicial (Desktop):**
- Mostrar header "🍼 Loja de Bebês Reborn"
- Grid com 6 produtos
- Footer com nomes da equipe

**Salvar como:** `evidencias/05_pagina_principal.png`

---

**Print 2 - Console do Navegador:**
- Abrir DevTools (F12)
- Ir para aba "Console"
- Mostrar logs:
  ```
  📄 DOM carregado - Iniciando aplicação...
  🚀 Iniciando carregamento de produtos...
  📡 API respondeu em Xms
  ✅ 6 produtos renderizados com sucesso
  ```

**Salvar como:** `evidencias/06_console_navegador.png`

---

**Print 3 - Network Tab:**
- DevTools → Aba "Network"
- Recarregar página (F5)
- Clicar na requisição `products`
- Mostrar:
  - Status: 200 OK
  - Response: JSON com 6 produtos
  - Time: ~1-2ms

**Salvar como:** `evidencias/07_network_api.png`

---

### 4. Testar Responsividade

**Desktop (1920x1080):**
- DevTools → Toggle device toolbar (Ctrl+Shift+M)
- Selecionar "Responsive"
- Definir 1920x1080
- Mostrar grid com 3 colunas

**Salvar como:** `evidencias/08_desktop.png`

---

**Tablet (768x1024):**
- Mudar para 768x1024
- Mostrar grid com 2 colunas

**Salvar como:** `evidencias/09_tablet.png`

---

**Mobile (375x667):**
- Mudar para 375x667 (iPhone SE)
- Mostrar grid com 1 coluna

**Salvar como:** `evidencias/10_mobile.png`

---

### 5. Testar Interatividade

**Hover nos Cards:**
- Passar mouse sobre card
- Card deve elevar (transform: translateY(-8px))
- Sombra deve aumentar

**Print:** Card com hover ativo

**Salvar como:** `evidencias/11_hover_card.png`

---

**Clique no Card:**
- Clicar em qualquer produto
- Alerta deve aparecer com:
  ```
  Produto: Bebê Reborn Alice
  Preço: R$ 299,90
  
  (Detalhes disponíveis na Sprint 2)
  ```

**Salvar como:** `evidencias/12_clique_produto.png`

---

### 6. Testar Tratamento de Erros

**Parar o servidor:**
```bash
Ctrl+C (no terminal do servidor)
```

**Recarregar a página no navegador:**

**Print:** Mensagem de erro:
```
❌ Não foi possível carregar os produtos.
Servidor indisponível. Certifique-se de que o servidor está rodando.
[Tentar Novamente]
```

**Salvar como:** `evidencias/13_erro_servidor_parado.png`

---

**Reiniciar servidor:**
```bash
npm start
```

**Clicar em "Tentar Novamente":**
- Página deve recarregar
- Produtos devem aparecer novamente

**Salvar como:** `evidencias/14_retry_sucesso.png`

---

### 7. Mostrar Código (Opcional)

**Principais arquivos para mostrar:**

**Backend - API (src/routes/api.js):**
- Linhas 8-28: GET /api/products
- Linhas 31-55: GET /api/products/:id

**Frontend - Renderização (public/js/app.js):**
- Linhas 14-19: formatPrice()
- Linhas 26-56: createProductCard()
- Linhas 62-73: renderProducts()

**Dados - Produtos (data/products.json):**
- Mostrar estrutura JSON de 1-2 produtos

---

## 📁 ESTRUTURA DE PASTAS SUGERIDA

```
docs/entrega-06/
├── evidencias/
│   ├── 01_servidor_iniciado.png
│   ├── 02_api_produtos.png
│   ├── 03_api_produto_id.png
│   ├── 04_api_404.png
│   ├── 05_pagina_principal.png
│   ├── 06_console_navegador.png
│   ├── 07_network_api.png
│   ├── 08_desktop.png
│   ├── 09_tablet.png
│   ├── 10_mobile.png
│   ├── 11_hover_card.png
│   ├── 12_clique_produto.png
│   ├── 13_erro_servidor_parado.png
│   ├── 14_retry_sucesso.png
│   └── (opcional: prints de código)
├── 00_RESUMO_EXECUTIVO.md
├── 01_RELATORIO_CRITERIOS_ACEITE.md
├── 02_RELATORIO_STATUS.md
├── 03_TABELA_METRICAS.md
├── 04_PLANILHA_DESENVOLVIMENTO.md
└── README.md
```

---

## 🔗 COMO ADICIONAR PRINTS NOS RELATÓRIOS

### No Markdown:

```markdown
**Print de Tela - Página Principal:**

![Página Principal](evidencias/05_pagina_principal.png)

**Resultado:** 6 produtos exibidos em grid responsivo ✅
```

### Onde adicionar:

**01_RELATORIO_CRITERIOS_ACEITE.md:**
- Seção 2.5 (Interface - Página de Listagem)
- Seção 2.6 (Interatividade)
- Seção 2.7 (Tratamento de Erros)

---

## ⚡ CHECKLIST RÁPIDO

Criar pasta evidencias:
```bash
cd docs\entrega-06
mkdir evidencias
```

Capturar prints:
- [ ] 01 - Servidor iniciado
- [ ] 02 - API todos os produtos
- [ ] 03 - API produto por ID
- [ ] 04 - API erro 404
- [ ] 05 - Página principal
- [ ] 06 - Console do navegador
- [ ] 07 - Network tab
- [ ] 08 - Desktop (1920px)
- [ ] 09 - Tablet (768px)
- [ ] 10 - Mobile (375px)
- [ ] 11 - Hover no card
- [ ] 12 - Clique no produto
- [ ] 13 - Erro (servidor parado)
- [ ] 14 - Retry funcionando

Adicionar nos relatórios:
- [ ] Links de imagens adicionados
- [ ] Descrições atualizadas

---

## 🎬 PARA A APRESENTAÇÃO

### Demo ao Vivo (Sem Prints)

Se preferirem fazer demo ao vivo:
1. Ter servidor rodando
2. Abrir página em fullscreen
3. Mostrar responsividade ao vivo
4. Clicar em produtos
5. Mostrar console/network

**Vantagem:** Mais dinâmico e mostra que realmente funciona

**Desvantagem:** Risco de internet/servidor falhar

---

### Apresentação com Prints (Seguro)

Se preferirem usar prints:
1. Tirar todos os 14 prints
2. Adicionar nos relatórios
3. Apresentar os PDFs/Markdown
4. Ter código rodando como backup

**Vantagem:** Sem risco de falhas técnicas

**Desvantagem:** Menos interativo

---

## 💡 RECOMENDAÇÃO FINAL

**Abordagem Híbrida:**
1. ✅ **Tirar os prints** (15 min de trabalho)
2. ✅ **Adicionar nos relatórios** (segurança)
3. ✅ **Ter servidor rodando** (demo ao vivo)
4. ✅ **Decidir na hora** (prints ou demo)

Assim vocês têm:
- 📸 Evidências documentadas
- 🎬 Possibilidade de demo ao vivo
- 🛡️ Backup caso algo falhe

---

## 🔧 FERRAMENTAS PARA PRINTS

**Windows:**
- **Win + Shift + S:** Captura de área
- **Win + PrtScn:** Captura tela inteira
- **Ferramenta de Captura:** Buscar no menu Iniciar

**Chrome DevTools:**
- **F12:** Abrir DevTools
- **Ctrl + Shift + M:** Modo responsivo
- **Ctrl + Shift + C:** Inspecionar elemento

---

## 📊 MÉTRICAS A DESTACAR NOS PRINTS

Quando capturar prints, destacar:
- ✅ **Tempo de resposta:** ~1-2ms na Network tab
- ✅ **Status 200 OK:** Requisições bem-sucedidas
- ✅ **6 produtos:** Sempre mostrar que são 6
- ✅ **Responsividade:** 3 colunas → 2 → 1
- ✅ **Logs informativos:** Console bem estruturado

---

**Tempo estimado:** 15-20 minutos para capturar todos os prints  
**Prioridade:** 🟡 OPCIONAL mas RECOMENDADO

**Boa sorte! 🚀**
