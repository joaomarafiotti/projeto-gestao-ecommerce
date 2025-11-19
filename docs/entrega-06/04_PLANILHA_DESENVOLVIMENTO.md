# 📋 PLANILHA ATUALIZADA DO DESENVOLVIMENTO

**Projeto:** MVP E-commerce Loja de Bebês Reborn  
**Data da Atualização:** 16/11/2025  
**Período:** Sprints 1-4 (06/11 - 02/12/2025)  
**Equipe:** Rafael Feltrim, João Pedro Marafiotti, João Vinícius Gonçalves dos Santos

---

## 1. VISÃO GERAL DO PROJETO

### 1.1 Informações Gerais

| Campo | Valor |
|-------|-------|
| **Nome do Projeto** | Loja de Bebês Reborn - E-commerce MVP |
| **Tipo** | Projeto Acadêmico - Gestão de Projetos |
| **Metodologia** | Híbrida (Ágil + Controles Preditivos) |
| **Duração Total** | 4 sprints (27 dias) |
| **Data Início** | 06/11/2025 |
| **Data Fim Prevista** | 02/12/2025 |
| **Status Atual** | 🟢 Em andamento - Sprint 2 |
| **Progresso Geral** | 25% (11/44 story points) |

### 1.2 Objetivos do Projeto

| # | Objetivo | Status |
|---|----------|--------|
| 1 | Implementar catálogo de produtos (backend + frontend) | ✅ Concluído |
| 2 | Criar interface de detalhes de produto e checkout | 🔄 Em andamento |
| 3 | Desenvolver lógica de processamento de pedidos | 📋 Planejado |
| 4 | Garantir qualidade através de testes e documentação | 📋 Planejado |

---

## 2. CRONOGRAMA DETALHADO

### 2.1 Visão por Sprint

| Sprint | Período | Dias | Story Points | Status | Progresso |
|--------|---------|------|--------------|--------|-----------|
| **Sprint 1** | 06/11 - 11/11 | 5 | 11 | ✅ **CONCLUÍDA** | ████████████ 100% |
| **Sprint 2** | 12/11 - 18/11 | 7 | 10 | 🔄 **EM ANDAMENTO** | ███░░░░░░░░░ 20% |
| **Sprint 3** | 19/11 - 25/11 | 7 | 17 | 📋 **PLANEJADA** | ░░░░░░░░░░░░ 0% |
| **Sprint 4** | 26/11 - 02/12 | 7 | 6 | 📋 **PLANEJADA** | ░░░░░░░░░░░░ 0% |
| **TOTAL** | 06/11 - 02/12 | 26 | **44** | 🔄 **25% COMPLETO** | ███░░░░░░░░░ 25% |

---

### 2.2 Backlog Completo do Produto

#### Sprint 1 - Fundação (06/11 - 11/11) ✅ CONCLUÍDA

| ID | Tarefa | Responsável | Pontos | Prioridade | Status | Data Início | Data Fim | Notas |
|----|--------|-------------|--------|------------|--------|-------------|----------|-------|
| **1.2.1** | Configuração do Projeto Node/Express | Rafael | 2 | 🔴 CRÍTICA | ✅ Concluído | 06/11 | 07/11 | package.json, servidor Express |
| **1.2.2** | Criação do Seed products.json | João P. | 1 | 🔴 CRÍTICA | ✅ Concluído | 07/11 | 08/11 | 6 produtos cadastrados |
| **1.2.3** | API: GET /api/products | Rafael | 2 | 🔴 CRÍTICA | ✅ Concluído | 08/11 | 09/11 | Lista todos produtos |
| **1.2.4** | UI: Página de lista (Home) | João V. | 3 | 🔴 CRÍTICA | ✅ Concluído | 09/11 | 10/11 | HTML/CSS responsivo |
| **1.2.5** | UI: Renderizar cards de produtos | João V. | 3 | 🔴 CRÍTICA | ✅ Concluído | 10/11 | 11/11 | JavaScript fetch + render |
| **SUBTOTAL** | | | **11** | | ✅ **100%** | | | |

**Observações Sprint 1:**
- ✅ Entregue dentro do prazo
- ✅ Implementação extra: GET /api/products/:id (bônus para Sprint 2)
- ✅ Performance excepcional: API em 1ms (meta: 200ms)

---

#### Sprint 2 - Detalhes e Checkout (12/11 - 18/11) 🔄 EM ANDAMENTO

| ID | Tarefa | Responsável | Pontos | Prioridade | Status | Data Início | Data Fim Prevista | Notas |
|----|--------|-------------|--------|------------|--------|-------------|-------------------|-------|
| **1.3.1** | API: GET /api/products/:id | Rafael | 2 | 🔴 CRÍTICA | ✅ Concluído | 09/11 | 09/11 | ✅ JÁ IMPLEMENTADA na Sprint 1! |
| **1.3.2** | UI: Página de detalhe do produto | João V. | 4 | 🔴 CRÍTICA | 🔄 Em Progresso | 14/11 | 16/11 | HTML + CSS + JS para produto.html |
| **1.3.3** | UI: Botão "Comprar agora" | João V. | - | 🟡 ALTA | 📋 Pendente | 16/11 | 16/11 | Incluído em 1.3.2 |
| **1.3.4** | UI: Esqueleto Checkout | João V. | 2 | 🟡 ALTA | 📋 Pendente | 17/11 | 18/11 | Formulário sem validação |
| **1.3.5** | Testes de Integração Sprint 2 | João P. | 2 | 🟡 ALTA | 📋 Pendente | 18/11 | 18/11 | Validar fluxo completo |
| **SUBTOTAL** | | | **10** | | 🔄 **20%** | | | |

**Progresso Sprint 2:**
- 2/10 pontos concluídos
- No prazo (18/11)
- Vantagem: API já pronta economizou tempo

---

#### Sprint 3 - Lógica de Pedidos (19/11 - 25/11) 📋 PLANEJADA

| ID | Tarefa | Responsável | Pontos | Prioridade | Status | Data Início Prevista | Data Fim Prevista | Notas |
|----|--------|-------------|--------|------------|--------|----------------------|-------------------|-------|
| **1.4.1** | API: POST /api/orders | Rafael | 3 | 🔴 CRÍTICA | 📋 Pendente | 19/11 | 20/11 | Receber dados do pedido |
| **1.4.2** | Validação de dados do pedido | Rafael | 2 | 🔴 CRÍTICA | 📋 Pendente | 20/11 | 21/11 | Campos obrigatórios, regex |
| **1.4.3** | Persistência de pedidos (JSON) | Rafael | 2 | 🔴 CRÍTICA | 📋 Pendente | 21/11 | 22/11 | Gravar em data/orders.json |
| **1.4.4** | UI: Tela de confirmação | João V. | 3 | 🔴 CRÍTICA | 📋 Pendente | 22/11 | 23/11 | Resumo do pedido |
| **1.4.5** | UI: Download do pedido (JSON) | João V. | 2 | 🟡 ALTA | 📋 Pendente | 23/11 | 24/11 | Botão de download |
| **1.4.6** | Validações frontend | João V. | 2 | 🟡 ALTA | 📋 Pendente | 24/11 | 24/11 | Formulário de checkout |
| **1.4.7** | Testes de Integração Sprint 3 | João P. | 3 | 🔴 CRÍTICA | 📋 Pendente | 25/11 | 25/11 | Testar fluxo completo |
| **SUBTOTAL** | | | **17** | | 📋 **0%** | | | |

---

#### Sprint 4 - Qualidade e Entrega (26/11 - 02/12) 📋 PLANEJADA

| ID | Tarefa | Responsável | Pontos | Prioridade | Status | Data Início Prevista | Data Fim Prevista | Notas |
|----|--------|-------------|--------|------------|--------|----------------------|-------------------|-------|
| **1.5.1** | Testes manuais completos | João P. | 2 | 🔴 CRÍTICA | 📋 Pendente | 26/11 | 27/11 | Todos os fluxos |
| **1.5.2** | Ajustes finais de UI/UX | João V. | 2 | 🟡 ALTA | 📋 Pendente | 28/11 | 29/11 | Polish visual |
| **1.5.3** | Documentação técnica (README) | Time | 1 | 🟡 ALTA | 📋 Pendente | 30/11 | 01/12 | Como executar + API docs |
| **1.5.4** | Preparação para apresentação | Time | 1 | 🟡 ALTA | 📋 Pendente | 01/12 | 02/12 | Slides, demo |
| **SUBTOTAL** | | | **6** | | 📋 **0%** | | | |

---

## 3. ALOCAÇÃO DE RECURSOS

### 3.1 Equipe do Projeto

| Nome | Papel | Dedicação | Habilidades Principais | Sprints Alocadas |
|------|-------|-----------|------------------------|------------------|
| **Rafael Feltrim** | Backend Lead | 40% | Node.js, Express, APIs REST | 1, 2, 3 |
| **João Pedro Marafiotti** | QA Lead / Data | 30% | Testes, JSON, Validações | 1, 2, 3, 4 |
| **João Vinícius G. Santos** | Frontend Lead / UI/UX | 40% | HTML, CSS, JavaScript, Design | 1, 2, 3, 4 |

### 3.2 Distribuição de Pontos por Responsável

| Responsável | Sprint 1 | Sprint 2 | Sprint 3 | Sprint 4 | Total | % |
|-------------|----------|----------|----------|----------|-------|---|
| **Rafael** | 4 pts | 2 pts | 7 pts | 0 pts | **13 pts** | 30% |
| **João Pedro** | 1 pts | 2 pts | 3 pts | 2 pts | **8 pts** | 18% |
| **João Vinícius** | 6 pts | 6 pts | 7 pts | 3 pts | **22 pts** | 50% |
| **Time (colaborativo)** | 0 pts | 0 pts | 0 pts | 1 pts | **1 pts** | 2% |
| **TOTAL** | **11** | **10** | **17** | **6** | **44 pts** | 100% |

---

## 4. ACOMPANHAMENTO DE MÉTRICAS

### 4.1 Métricas de Desempenho por Sprint

| Métrica | Sprint 1 | Sprint 2 | Sprint 3 | Sprint 4 | Meta | Status |
|---------|----------|----------|----------|----------|------|--------|
| **Story Points Planejados** | 11 | 10 | 17 | 6 | 44 | - |
| **Story Points Entregues** | 11 | 2 | - | - | 44 | 🟢 |
| **Taxa de Conclusão** | 100% | 20% | - | - | ≥95% | 🟢 |
| **Defeitos Críticos** | 0 | 0 | - | - | 0 | 🟢 |
| **Tempo de Resposta API (ms)** | 1 | - | - | - | <200 | 🟢 |
| **Horas Trabalhadas** | 6h | ~3h | - | - | - | - |
| **Velocidade (pts/h)** | 1.83 | - | - | - | >1.0 | 🟢 |

### 4.2 Burndown Acumulado do Projeto

```
Story Points Restantes
44 │ ●
40 │   ╲
36 │     ╲
32 │       ●─── Planejado
28 │         ╲
24 │           ╲
20 │             ╲
16 │               ╲
12 │                 ╲
 8 │                   ╲
 4 │                     ╲
 0 └───────────────────────●
   6/11  12/11  19/11  26/11  2/12

   ● Real
   ─ Planejado (ideal)

Sprint 1: 11 pts queimados ✅
Sprint 2: 10 pts em andamento 🔄
```

---

## 5. GESTÃO DE RISCOS

### 5.1 Registro de Riscos

| ID | Risco | Probabilidade | Impacto | Nível | Status | Plano de Mitigação | Responsável |
|----|-------|---------------|---------|-------|--------|--------------------|-------------|
| **R01** | Atraso na implementação de UI complexa | 🟡 Média (30%) | 🟡 Médio | 🟡 MÉDIO | Ativo | Simplificar design, focar em MVP | João V. |
| **R02** | Mudança de requisitos pelo professor | 🟢 Baixa (10%) | 🔴 Alto | 🟡 MÉDIO | Ativo | Manter escopo congelado, documentar mudanças | Time |
| **R03** | Integração backend-frontend | 🟢 Baixa (5%) | 🟡 Médio | 🟢 BAIXO | Ativo | Contratos de API bem definidos | Rafael + João V. |
| **R04** | Qualidade insuficiente nos testes | 🟢 Baixa (5%) | 🟡 Médio | 🟢 BAIXO | Ativo | Checklist de testes detalhado | João P. |
| **R05** | Performance da aplicação | 🟢 Muito Baixa (2%) | 🟢 Baixo | 🟢 BAIXO | Controlado | Stack simples (Node+JSON) já performática | Rafael |

**Nível de Risco Geral:** 🟡 **BAIXO-MÉDIO**

### 5.2 Issues e Impedimentos

| ID | Issue | Data Identificação | Status | Resolução | Data Resolução |
|----|-------|-------------------|--------|-----------|----------------|
| - | Nenhum impedimento ativo | - | - | - | - |

---

## 6. QUALIDADE

### 6.1 Checklist de Qualidade por Sprint

| Item | Sprint 1 | Sprint 2 | Sprint 3 | Sprint 4 |
|------|----------|----------|----------|----------|
| **Code Review realizado** | ✅ | 🔄 | 📋 | 📋 |
| **Testes manuais executados** | ✅ | 🔄 | 📋 | 📋 |
| **Documentação atualizada** | ✅ | 🔄 | 📋 | 📋 |
| **Performance validada** | ✅ | 📋 | 📋 | 📋 |
| **Bugs críticos = 0** | ✅ | ✅ | 📋 | 📋 |

### 6.2 Rastreabilidade de Testes

| Funcionalidade | Casos de Teste | Aprovados | Taxa | Status |
|----------------|----------------|-----------|------|--------|
| **GET /api/products** | 2 | 2 | 100% | ✅ |
| **GET /api/products/:id** | 2 | 2 | 100% | ✅ |
| **UI - Listagem de produtos** | 8 | 8 | 100% | ✅ |
| **UI - Responsividade** | 4 | 4 | 100% | ✅ |
| **UI - Estados (loading/error)** | 3 | 3 | 100% | ✅ |
| **Total Sprint 1** | **19** | **19** | **100%** | ✅ |
| **GET /api/products/:id (Sprint 2)** | 2 | 2 | 100% | ✅ |
| **UI - Página de detalhes** | 5 | 0 | 0% | 🔄 |
| **UI - Checkout** | 4 | 0 | 0% | 📋 |

---

## 7. GESTÃO DE MUDANÇAS

### 7.1 Registro de Mudanças (Change Log)

| # | Data | Tipo | Descrição | Solicitante | Aprovado? | Impacto | Ação Tomada |
|---|------|------|-----------|-------------|-----------|---------|-------------|
| 001 | 09/11 | Feature | API GET /api/products/:id implementada adiantada | Time Dev | ✅ Sim | +2 pts Sprint 1 | Aceito (vantagem para Sprint 2) |

**Total de Mudanças:** 1 (positiva)  
**Scope Creep:** 0%

---

## 8. ENTREGAS (DELIVERABLES)

### 8.1 Artefatos Produzidos

| # | Artefato | Tipo | Sprint | Status | Localização |
|---|----------|------|--------|--------|-------------|
| 1 | **Código Backend** | Código | 1 | ✅ Entregue | src/ |
| 2 | **Código Frontend** | Código | 1 | ✅ Entregue | public/ |
| 3 | **Base de Dados (JSON)** | Dados | 1 | ✅ Entregue | data/products.json |
| 4 | **Documentação Sprint 1** | Docs | 1 | ✅ Entregue | README.md, INSTRUCOES.md |
| 5 | **Checklist de Validação** | Docs | 1 | ✅ Entregue | CHECKLIST-SPRINT-1.md |
| 6 | **Relatório de Critérios de Aceite** | Docs | 2 | ✅ Entregue | docs/entrega-06/01_*.md |
| 7 | **Relatório de Status** | Docs | 2 | ✅ Entregue | docs/entrega-06/02_*.md |
| 8 | **Tabela de Métricas** | Docs | 2 | ✅ Entregue | docs/entrega-06/03_*.md |
| 9 | **Planilha de Desenvolvimento** | Docs | 2 | ✅ Entregue | docs/entrega-06/04_*.md |
| 10 | **Página de Detalhes (produto.html)** | Código | 2 | 🔄 Em Progresso | public/produto.html |
| 11 | **Página de Checkout (checkout.html)** | Código | 2 | 📋 Pendente | public/checkout.html |
| 12 | **API de Pedidos (POST /api/orders)** | Código | 3 | 📋 Pendente | src/routes/api.js |
| 13 | **Dados de Pedidos (orders.json)** | Dados | 3 | 📋 Pendente | data/orders.json |
| 14 | **Testes Automatizados** | Testes | 4 | 📋 Pendente | tests/ |
| 15 | **Documentação Final (README)** | Docs | 4 | 📋 Pendente | README.md |

---

## 9. COMUNICAÇÃO E STAKEHOLDERS

### 9.1 Stakeholders

| Nome | Papel | Interesse | Influência | Estratégia de Comunicação |
|------|-------|-----------|------------|---------------------------|
| **Professor** | Cliente / Avaliador | 🔴 Alto | 🔴 Alto | Relatórios semanais + apresentações |
| **Grupo "Outro"** | Pares / Avaliadores | 🟡 Médio | 🟡 Médio | Compartilhamento de código + métricas |
| **Equipe de Dev** | Executores | 🔴 Alto | 🔴 Alto | Daily standups + Slack/WhatsApp |

### 9.2 Plano de Comunicação

| Tipo | Frequência | Participantes | Duração | Objetivo |
|------|------------|---------------|---------|----------|
| **Daily Standup** | Diária | Time completo | 15 min | Alinhamento rápido |
| **Sprint Review** | Fim de sprint | Time + Professor | 30 min | Demonstração |
| **Sprint Retrospective** | Fim de sprint | Time | 30 min | Melhoria contínua |
| **Relatório de Status** | Semanal | Time → Professor | - | Transparência |

---

## 10. LIÇÕES APRENDIDAS

### 10.1 Lições da Sprint 1

| # | Lição | Tipo | Ação Futura |
|---|-------|------|-------------|
| 1 | Estimativas foram precisas (100% de acurácia) | ✅ Positiva | Manter método de estimativa |
| 2 | Implementar features adiantadas gera vantagem | ✅ Positiva | Continuar proativo |
| 3 | Separação backend/frontend facilitou desenvolvimento | ✅ Positiva | Manter arquitetura |
| 4 | Vanilla JS é suficiente para MVP (sem React) | ✅ Positiva | Não complicar stack |
| 5 | Testes manuais funcionam, mas são trabalhosos | 🟡 Neutra | Automatizar na Sprint 4 |

---

## 11. FINANCIAL TRACKING (SIMULADO)

### 11.1 Custo por Sprint

| Sprint | Horas Planejadas | Horas Reais | Custo/Hora | Custo Total | Orçamento | Variação |
|--------|------------------|-------------|------------|-------------|-----------|----------|
| Sprint 1 | 6h | 6h | R$ 50 | R$ 300 | R$ 300 | R$ 0 ✅ |
| Sprint 2 | 5.5h | ~3h (parcial) | R$ 50 | R$ 275 | R$ 275 | - |
| Sprint 3 | 9.3h | - | R$ 50 | R$ 465 | R$ 465 | - |
| Sprint 4 | 3.3h | - | R$ 50 | R$ 165 | R$ 165 | - |
| **TOTAL** | **24.1h** | **6h** | **R$ 50** | **R$ 1.205** | **R$ 1.205** | **R$ 0** |

**Burn Rate:** R$ 300/sprint (média)  
**Budget Variance:** 0% ✅

---

## 12. PRÓXIMAS AÇÕES (ACTION ITEMS)

### 12.1 Imediatas (Próximas 48h)

| # | Ação | Responsável | Prazo | Status |
|---|------|-------------|-------|--------|
| 1 | Finalizar página de detalhes (produto.html) | João V. | 16/11 | 🔄 Em Progresso |
| 2 | Criar esqueleto de checkout.html | João V. | 17/11 | 📋 Pendente |
| 3 | Documentar API já implementada (GET /:id) | Rafael | 17/11 | 📋 Pendente |
| 4 | Revisar métricas da Sprint 2 | João P. | 17/11 | 📋 Pendente |
| 5 | Preparar apresentação Entrega-06 | Time | 18/11 | 📋 Pendente |

### 12.2 Sprint 2 (Até 18/11)

- [ ] Concluir UI de detalhes do produto
- [ ] Concluir UI de checkout (esqueleto)
- [ ] Executar testes de integração
- [ ] Atualizar documentação
- [ ] Coletar métricas da sprint
- [ ] Preparar demo para apresentação

---

## 13. INDICADORES DE SUCESSO

### 13.1 Critérios de Sucesso do Projeto

| Critério | Meta | Status Atual | Atingido? |
|----------|------|--------------|-----------|
| **Prazo** | Entregar até 02/12 | No prazo | 🔄 Em progresso |
| **Escopo** | 100% das features MVP | 25% concluído | 🔄 Em progresso |
| **Qualidade** | 0 bugs críticos | 0 bugs | ✅ Sim |
| **Performance** | API < 200ms | API 1ms | ✅ Sim |
| **Testes** | ≥90% aprovação | 100% aprovação | ✅ Sim |
| **Documentação** | Completa e atualizada | 60% completa | 🔄 Em progresso |

### 13.2 KPIs Principais

| KPI | Fórmula | Sprint 1 | Meta Final | Status |
|-----|---------|----------|------------|--------|
| **Índice de Saúde** | (Métricas OK / Total) × 100 | 100% | ≥90% | 🟢 |
| **Índice de Qualidade** | 100 - Defeitos × Peso | 100 | ≥85 | 🟢 |
| **Cumprimento Prazo** | (Pts Entregues / Planejados) × 100 | 100% | ≥95% | 🟢 |

---

## 14. ANEXOS

### 14.1 Estrutura de Diretórios

```
projeto-gestao-ecommerce/
├── data/                    # Dados JSON
│   └── products.json        ✅ 6 produtos
├── public/                  # Frontend
│   ├── index.html           ✅ Página principal
│   ├── produto.html         🔄 Em desenvolvimento
│   ├── checkout.html        📋 Pendente
│   ├── css/
│   │   └── styles.css       ✅ Estilos responsivos
│   └── js/
│       └── app.js           ✅ Lógica frontend
├── src/                     # Backend
│   ├── server.js            ✅ Servidor Express
│   └── routes/
│       └── api.js           ✅ Rotas da API
├── docs/                    # Documentação
│   └── entrega-06/          ✅ Relatórios
├── package.json             ✅ Configuração
└── README.md                ✅ Documentação principal
```

### 14.2 Tecnologias Utilizadas

| Camada | Tecnologia | Versão | Justificativa |
|--------|-----------|--------|---------------|
| **Backend** | Node.js | 18+ | Stack leve e rápida para MVP |
| **Framework** | Express.js | 5.x | Simplicidade e robustez |
| **Frontend** | Vanilla JS | ES6+ | Sem complexidade desnecessária |
| **Estilos** | CSS3 | - | Grid nativo, responsividade |
| **Dados** | JSON Files | - | Persistência simples para MVP |

---

## 15. GLOSSÁRIO

| Termo | Definição |
|-------|-----------|
| **MVP** | Minimum Viable Product - Produto mínimo viável |
| **Story Point** | Unidade de medida de esforço para tarefas ágeis |
| **Burndown** | Gráfico que mostra trabalho restante vs. tempo |
| **Sprint** | Ciclo de desenvolvimento de 1-2 semanas (metodologia Scrum) |
| **Backlog** | Lista priorizada de funcionalidades a desenvolver |
| **Velocity** | Taxa de entrega de story points por unidade de tempo |
| **Scope Creep** | Aumento não planejado do escopo do projeto |
| **QA** | Quality Assurance - Garantia de Qualidade |

---

**Planilha gerada em:** 16/11/2025 às 20:30 BRT  
**Próxima atualização:** 18/11/2025 (Fim da Sprint 2)  
**Responsável:** João Pedro Marafiotti (QA Lead)  
**Versão:** 2.0

---

## APROVAÇÕES E ASSINATURAS

| Papel | Nome | Data | Assinatura |
|-------|------|------|------------|
| **Backend Lead** | Rafael Feltrim | 16/11/2025 | ___________ |
| **QA Lead** | João Pedro Marafiotti | 16/11/2025 | ___________ |
| **Frontend/UI Lead** | João Vinícius G. Santos | 16/11/2025 | ___________ |
| **Cliente (Professor)** | [Nome do Professor] | __/__/2025 | ___________ |
