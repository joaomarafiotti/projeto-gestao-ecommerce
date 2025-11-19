// Elementos do DOM
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error');
const productsGridElement = document.getElementById('products-grid');

// Configuração da API
const API_BASE_URL = '/api';

/**
 * Formata valor numérico para formato de moeda brasileira
 * @param {number} value - Valor a ser formatado
 * @returns {string} Valor formatado (ex: R$ 299,90)
 */
function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

/**
 * Cria elemento HTML de card de produto
 * @param {Object} product - Objeto com dados do produto
 * @returns {HTMLElement} Elemento do card
 */
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.productId = product.id;
  
  card.innerHTML = `
    <img 
      src="${product.imageUrl}" 
      alt="${product.name}" 
      class="product-image"
      onerror="this.src='https://via.placeholder.com/400x400?text=Imagem+Indisponível'"
    >
    <div class="product-info">
      <h3 class="product-name">${product.name}</h3>
      <div class="product-price-container">
        <span class="product-price-label">Preço:</span>
        <p class="product-price">${formatPrice(product.price)}</p>
      </div>
    </div>
  `;
  
  // Event listener para clique - navega para página de detalhes
  card.addEventListener('click', () => {
    console.log(`Produto clicado: ${product.name} (ID: ${product.id})`);
    window.location.href = `/produto.html?id=${product.id}`;
  });
  
  return card;
}

/**
 * Renderiza lista de produtos no grid
 * @param {Array} products - Array de produtos
 */
function renderProducts(products) {
  // Limpa grid
  productsGridElement.innerHTML = '';
  
  // Cria e adiciona card para cada produto
  products.forEach(product => {
    const card = createProductCard(product);
    productsGridElement.appendChild(card);
  });
  
  console.log(`✅ ${products.length} produtos renderizados com sucesso`);
}

/**
 * Exibe estado de loading
 */
function showLoading() {
  loadingElement.style.display = 'block';
  errorElement.style.display = 'none';
  productsGridElement.style.display = 'none';
}

/**
 * Exibe estado de sucesso (produtos carregados)
 */
function showSuccess() {
  loadingElement.style.display = 'none';
  errorElement.style.display = 'none';
  productsGridElement.style.display = 'grid';
}

/**
 * Exibe estado de erro
 * @param {string} message - Mensagem de erro
 */
function showError(message) {
  loadingElement.style.display = 'none';
  productsGridElement.style.display = 'none';
  errorElement.style.display = 'block';
  
  const errorDetails = errorElement.querySelector('.error-details');
  errorDetails.textContent = message;
}

/**
 * Busca produtos da API
 * @returns {Promise<Array>} Promise com array de produtos
 */
async function fetchProducts() {
  const startTime = performance.now();
  
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status} ${response.statusText}`);
    }
    
    const products = await response.json();
    
    const duration = Math.round(performance.now() - startTime);
    console.log(`📡 API respondeu em ${duration}ms`);
    
    // Validação básica dos dados
    if (!Array.isArray(products)) {
      throw new Error('Resposta da API não é um array');
    }
    
    if (products.length === 0) {
      throw new Error('Nenhum produto encontrado');
    }
    
    // Validação de estrutura de cada produto
    products.forEach((product, index) => {
      if (!product.id || !product.name || !product.price || !product.imageUrl) {
        console.warn(`⚠️ Produto na posição ${index} está incompleto:`, product);
      }
    });
    
    return products;
  } catch (error) {
    console.error('❌ Erro ao buscar produtos:', error);
    throw error;
  }
}

/**
 * Função principal - carrega e renderiza produtos
 */
async function loadProducts() {
  console.log('🚀 Iniciando carregamento de produtos...');
  showLoading();
  
  try {
    const products = await fetchProducts();
    renderProducts(products);
    showSuccess();
    
    console.log('✅ Produtos carregados e renderizados com sucesso!');
  } catch (error) {
    let errorMessage = 'Verifique sua conexão com o servidor.';
    
    if (error.message.includes('Failed to fetch')) {
      errorMessage = 'Servidor indisponível. Certifique-se de que o servidor está rodando.';
    } else if (error.message.includes('HTTP')) {
      errorMessage = `Erro na API: ${error.message}`;
    } else {
      errorMessage = error.message;
    }
    
    showError(errorMessage);
    console.error('❌ Falha ao carregar produtos:', errorMessage);
  }
}

// Inicialização quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  console.log('📄 DOM carregado - Iniciando aplicação...');
  loadProducts();
});

// Tratamento de erros globais
window.addEventListener('error', (event) => {
  console.error('❌ Erro global capturado:', event.error);
});

// Exporta funções para uso em outras partes (se necessário)
window.app = {
  loadProducts,
  fetchProducts,
  formatPrice
};
