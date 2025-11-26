// Elementos do DOM
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error');
const checkoutContainer = document.getElementById('checkout-container');
const formCheckout = document.getElementById('form-checkout');
const productLink = document.getElementById('product-link');

// Elementos do resumo do pedido
const summaryImage = document.getElementById('summary-image');
const summaryName = document.getElementById('summary-name');
const summaryPrice = document.getElementById('summary-price');
const subtotal = document.getElementById('subtotal');
const total = document.getElementById('total');

// Configuração da API
const API_BASE_URL = '/api';

// Dados do produto atual
let currentProduct = null;

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
  checkoutContainer.style.display = 'none';
}

/**
 * Exibe estado de sucesso (checkout carregado)
 */
function showSuccess() {
  loadingElement.style.display = 'none';
  errorElement.style.display = 'none';
  checkoutContainer.style.display = 'grid';
}

/**
 * Exibe estado de erro
 * @param {string} message - Mensagem de erro
 */
function showError(message) {
  loadingElement.style.display = 'none';
  checkoutContainer.style.display = 'none';
  errorElement.style.display = 'block';
  
  const errorDetails = errorElement.querySelector('.error-details');
  errorDetails.textContent = message;
}

/**
 * Renderiza resumo do pedido
 * @param {Object} product - Objeto com dados do produto
 */
function renderOrderSummary(product) {
  currentProduct = product;
  
  // Atualizar link do produto no breadcrumb
  productLink.href = `/produto.html?id=${product.id}`;
  productLink.textContent = product.name;
  
  // Atualizar título da página
  document.title = `Checkout - ${product.name}`;
  
  // Atualizar imagem do resumo
  summaryImage.src = product.imageUrl;
  summaryImage.alt = product.name;
  summaryImage.onerror = function() {
    this.src = 'https://via.placeholder.com/80x80?text=Produto';
  };
  
  // Atualizar nome e preço
  summaryName.textContent = product.name;
  summaryPrice.textContent = formatPrice(product.price);
  
  // Atualizar totais
  subtotal.textContent = formatPrice(product.price);
  total.textContent = formatPrice(product.price);
  
  console.log(`✅ Resumo do pedido renderizado: ${product.name}`);
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
    
    return product;
  } catch (error) {
    console.error('❌ Erro ao buscar produto:', error);
    throw error;
  }
}

/**
 * Valida campos do formulário
 * @param {FormData} formData - Dados do formulário
 * @returns {Object} Objeto com validações
 */
function validateForm(formData) {
  const errors = [];
  
  // Validar nome
  const nome = formData.get('nome').trim();
  if (nome.length < 3) {
    errors.push('Nome deve ter pelo menos 3 caracteres');
  }

  // Validar email
  const email = formData.get('email').trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push('E-mail inválido');
  }

  // Validar telefone
  const telefone = formData.get('telefone').trim();
  const telefoneRegex = /^\(\d{2}\)\s?\d{4,5}-?\d{4}$/;
  if (!telefoneRegex.test(telefone) && telefone.replace(/\D/g, '').length < 10) {
    errors.push('Telefone inválido');
  }

  // Validar CEP
  const cep = formData.get('cep').trim();
  const cepRegex = /^\d{5}-?\d{3}$/;
  if (!cepRegex.test(cep)) {
    errors.push('CEP inválido');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Envia pedido para a API
 * @param {Object} orderData - Dados do pedido
 * @returns {Promise<Object>} Promise com resposta da API
 */
async function submitOrder(orderData) {
  try {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro ao processar pedido');
    }
    
    const result = await response.json();
    console.log('✅ Pedido enviado com sucesso:', result);
    
    return result;
  } catch (error) {
    console.error('❌ Erro ao enviar pedido:', error);
    throw error;
  }
}

/**
 * Handler do submit do formulário
 * @param {Event} event - Evento de submit
 */
async function handleCheckoutSubmit(event) {
  event.preventDefault();
  
  const formData = new FormData(formCheckout);
  
  // Validar formulário
  const validation = validateForm(formData);
  
  if (!validation.valid) {
    alert('Erros no formulário:\n\n' + validation.errors.join('\n'));
    return;
  }
  
  // Preparar dados do pedido
  const orderData = {
    produto: {
      id: currentProduct.id,
      name: currentProduct.name,
      price: currentProduct.price,
      imageUrl: currentProduct.imageUrl
    },
    cliente: {
      nome: formData.get('nome').trim(),
      email: formData.get('email').trim(),
      telefone: formData.get('telefone').trim()
    },
    endereco: {
      cep: formData.get('cep').trim(),
      estado: formData.get('estado').trim().toUpperCase(),
      cidade: formData.get('cidade').trim(),
      endereco: formData.get('endereco').trim(),
      numero: formData.get('numero').trim(),
      complemento: formData.get('complemento').trim() || null
    },
    total: currentProduct.price,
    data: new Date().toISOString()
  };
  
  console.log('📦 Dados do pedido preparados:', orderData);
  
  // Desabilitar botão submit durante processamento
  const submitButton = formCheckout.querySelector('.btn-submit');
  submitButton.disabled = true;
  submitButton.textContent = 'Processando...';
  
  try {
    // Enviar pedido para a API
    const result = await submitOrder(orderData);
    
    // Salvar no localStorage para exibição na página de confirmação
    localStorage.setItem('lastOrder', JSON.stringify(result.order));
    
    console.log('✅ Pedido salvo, redirecionando para confirmação...');
    
    // Redirecionar para página de confirmação
    window.location.href = `/confirmacao.html?id=${result.order.id}`;
  } catch (error) {
    // Reabilitar botão em caso de erro
    submitButton.disabled = false;
    submitButton.textContent = 'Finalizar Pedido 🛒';
    
    alert(
      `❌ Erro ao processar pedido:

${error.message}

Por favor, tente novamente.`
    );
    
    console.error('❌ Falha ao processar pedido:', error);
  }
}

/**
 * Aplicar máscaras nos campos
 */
function applyMasks() {
  // Máscara de telefone
  const telefoneInput = document.getElementById('telefone');
  telefoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    
    e.target.value = value;
  });
  
  // Máscara de CEP
  const cepInput = document.getElementById('cep');
  cepInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, 8);
    
    if (value.length > 5) {
      value = `${value.slice(0, 5)}-${value.slice(5)}`;
    }
    
    e.target.value = value;
  });
  
  // Estado em maiúsculas
  const estadoInput = document.getElementById('estado');
  estadoInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.toUpperCase().slice(0, 2);
  });
}

/**
 * Função principal - carrega checkout
 */
async function loadCheckout() {
  console.log('🚀 Iniciando carregamento do checkout...');
  
  // Verificar se tem ID na URL
  const productId = getProductIdFromUrl();
  
  if (!productId) {
    showError('ID do produto não especificado. Volte para a loja e selecione um produto.');
    return;
  }
  
  showLoading();
  
  try {
    const product = await fetchProduct(productId);
    renderOrderSummary(product);
    showSuccess();
    
    console.log('✅ Checkout carregado com sucesso!');
  } catch (error) {
    let errorMessage = 'Verifique sua conexão com o servidor.';
    
    if (error.message.includes('não encontrado')) {
      errorMessage = 'Produto não encontrado. Volte para a loja e selecione outro produto.';
    } else if (error.message.includes('Failed to fetch')) {
      errorMessage = 'Servidor indisponível. Certifique-se de que o servidor está rodando.';
    } else {
      errorMessage = error.message;
    }
    
    showError(errorMessage);
    console.error('❌ Falha ao carregar checkout:', errorMessage);
  }
}

// Inicialização quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  console.log('📄 DOM carregado - Iniciando checkout...');
  
  // Carregar checkout
  loadCheckout();
  
  // Aplicar máscaras
  applyMasks();
  
  // Adicionar event listener no formulário
  formCheckout.addEventListener('submit', handleCheckoutSubmit);
});

// Tratamento de erros globais
window.addEventListener('error', (event) => {
  console.error('❌ Erro global capturado:', event.error);
});

// Exporta funções para uso em outras partes (se necessário)
window.checkoutPage = {
  loadCheckout,
  fetchProduct,
  formatPrice,
  getProductIdFromUrl
};
