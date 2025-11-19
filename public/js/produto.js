// Elementos do DOM
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error');
const productDetailsElement = document.getElementById('product-details');

// Elementos de produto
const productImage = document.getElementById('product-image');
const productName = document.getElementById('product-name');
const productPrice = document.getElementById('product-price');
const productNameBreadcrumb = document.getElementById('product-name-breadcrumb');
const btnBuy = document.getElementById('btn-buy');

// Configuração da API
const API_BASE_URL = '/api';

/**
 * Obtém o ID do produto da URL
 * @returns {string|null} ID do produto ou null
 */
function getProductIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

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
 * Exibe estado de loading
 */
function showLoading() {
  loadingElement.style.display = 'block';
  errorElement.style.display = 'none';
  productDetailsElement.style.display = 'none';
}

/**
 * Exibe estado de sucesso (produto carregado)
 */
function showSuccess() {
  loadingElement.style.display = 'none';
  errorElement.style.display = 'none';
  productDetailsElement.style.display = 'grid';
}

/**
 * Exibe estado de erro
 * @param {string} message - Mensagem de erro
 */
function showError(message) {
  loadingElement.style.display = 'none';
  productDetailsElement.style.display = 'none';
  errorElement.style.display = 'block';
  
  const errorDetails = errorElement.querySelector('.error-details');
  errorDetails.textContent = message;
}

/**
 * Renderiza detalhes do produto
 * @param {Object} product - Objeto com dados do produto
 */
function renderProductDetails(product) {
  // Atualizar título da página
  document.title = `${product.name} - Loja de Bebês Reborn`;
  
  // Atualizar breadcrumb
  productNameBreadcrumb.textContent = product.name;
  
  // Atualizar imagem
  productImage.src = product.imageUrl;
  productImage.alt = product.name;
  productImage.onerror = function() {
    this.src = 'https://via.placeholder.com/500x500?text=Imagem+Indisponível';
  };
  
  // Atualizar nome
  productName.textContent = product.name;
  
  // Atualizar preço
  productPrice.textContent = formatPrice(product.price);
  
  console.log(`✅ Produto renderizado: ${product.name} (${product.id})`);
}

/**
 * Busca produto específico da API
 * @param {string} productId - ID do produto
 * @returns {Promise<Object>} Promise com dados do produto
 */
async function fetchProduct(productId) {
  const startTime = performance.now();
  
  try {
    const response = await fetch(`${API_BASE_URL}/products/${productId}`);
    
    if (response.status === 404) {
      throw new Error('Produto não encontrado');
    }
    
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status} ${response.statusText}`);
    }
    
    const product = await response.json();
    
    const duration = Math.round(performance.now() - startTime);
    console.log(`📡 API respondeu em ${duration}ms`);
    
    // Validação básica dos dados
    if (!product.id || !product.name || !product.price || !product.imageUrl) {
      throw new Error('Dados do produto incompletos');
    }
    
    return product;
  } catch (error) {
    console.error('❌ Erro ao buscar produto:', error);
    throw error;
  }
}

/**
 * Função principal - carrega e renderiza produto
 */
async function loadProduct() {
  console.log('🚀 Iniciando carregamento do produto...');
  
  // Verificar se tem ID na URL
  const productId = getProductIdFromUrl();
  
  if (!productId) {
    showError('ID do produto não especificado. Volte para a loja e selecione um produto.');
    return;
  }
  
  showLoading();
  
  try {
    const product = await fetchProduct(productId);
    renderProductDetails(product);
    showSuccess();
    
    console.log('✅ Produto carregado e renderizado com sucesso!');
  } catch (error) {
    let errorMessage = 'Verifique sua conexão com o servidor.';
    
    if (error.message.includes('não encontrado')) {
      errorMessage = 'Produto não encontrado. Volte para a loja e selecione outro produto.';
    } else if (error.message.includes('Failed to fetch')) {
      errorMessage = 'Servidor indisponível. Certifique-se de que o servidor está rodando.';
    } else if (error.message.includes('HTTP')) {
      errorMessage = `Erro na API: ${error.message}`;
    } else {
      errorMessage = error.message;
    }
    
    showError(errorMessage);
    console.error('❌ Falha ao carregar produto:', errorMessage);
  }
}

/**
 * Handler do botão Comprar Agora
 */
function handleBuyNow() {
  const productId = getProductIdFromUrl();
  
  if (!productId) {
    alert('Erro: ID do produto não encontrado');
    return;
  }
  
  console.log(`🛒 Redirecionando para checkout do produto: ${productId}`);
  
  // Redirecionar para página de checkout com ID do produto
  window.location.href = `/checkout.html?id=${productId}`;
}

// Inicialização quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  console.log('📄 DOM carregado - Iniciando aplicação de detalhes...');
  
  // Carregar produto
  loadProduct();
  
  // Adicionar event listener no botão comprar
  btnBuy.addEventListener('click', handleBuyNow);
});

// Tratamento de erros globais
window.addEventListener('error', (event) => {
  console.error('❌ Erro global capturado:', event.error);
});

// Exporta funções para uso em outras partes (se necessário)
window.productPage = {
  loadProduct,
  fetchProduct,
  formatPrice,
  getProductIdFromUrl
};
