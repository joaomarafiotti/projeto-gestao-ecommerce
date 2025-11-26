// Elementos do DOM
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error');
const confirmationContainer = document.getElementById('confirmation-container');

// Elementos de dados
const orderId = document.getElementById('order-id');
const orderDate = document.getElementById('order-date');
const productImage = document.getElementById('product-image');
const productName = document.getElementById('product-name');
const productPrice = document.getElementById('product-price');
const customerName = document.getElementById('customer-name');
const customerEmail = document.getElementById('customer-email');
const customerPhone = document.getElementById('customer-phone');
const deliveryAddress = document.getElementById('delivery-address');
const orderTotal = document.getElementById('order-total');
const btnDownload = document.getElementById('btn-download');

// Dados do pedido atual
let currentOrder = null;

/**
 * Formata valor numérico para formato de moeda brasileira
 */
function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

/**
 * Formata data ISO para formato brasileiro
 */
function formatDate(isoDate) {
  const date = new Date(isoDate);
  return date.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

/**
 * Exibe estado de loading
 */
function showLoading() {
  loadingElement.style.display = 'block';
  errorElement.style.display = 'none';
  confirmationContainer.style.display = 'none';
}

/**
 * Exibe estado de sucesso
 */
function showSuccess() {
  loadingElement.style.display = 'none';
  errorElement.style.display = 'none';
  confirmationContainer.style.display = 'block';
}

/**
 * Exibe estado de erro
 */
function showError(message) {
  loadingElement.style.display = 'none';
  confirmationContainer.style.display = 'none';
  errorElement.style.display = 'block';
  
  const errorDetails = errorElement.querySelector('.error-details');
  errorDetails.textContent = message;
}

/**
 * Renderiza dados da confirmação
 */
function renderConfirmation(order) {
  currentOrder = order;
  
  // Dados do pedido
  orderId.textContent = order.id;
  orderDate.textContent = formatDate(order.createdAt);
  
  // Produto
  productImage.src = order.produto.imageUrl;
  productImage.alt = order.produto.name;
  productImage.onerror = function() {
    this.src = 'https://via.placeholder.com/80x80?text=Produto';
  };
  productName.textContent = order.produto.name;
  productPrice.textContent = formatPrice(order.produto.price);
  
  // Cliente
  customerName.textContent = order.cliente.nome;
  customerEmail.textContent = order.cliente.email;
  customerPhone.textContent = order.cliente.telefone;
  
  // Endereço
  const endereco = order.endereco;
  const addressHtml = `
    ${endereco.endereco}, ${endereco.numero}
    ${endereco.complemento ? `<br>${endereco.complemento}` : ''}
    <br>${endereco.cidade} - ${endereco.estado}
    <br>CEP: ${endereco.cep}
  `;
  deliveryAddress.innerHTML = addressHtml;
  
  // Total
  orderTotal.textContent = formatPrice(order.total);
  
  console.log('✅ Confirmação renderizada:', order.id);
}

/**
 * Download do pedido em JSON
 */
function downloadOrderJSON() {
  if (!currentOrder) {
    alert('Erro: Dados do pedido não encontrados');
    return;
  }
  
  const json = JSON.stringify(currentOrder, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `pedido-${currentOrder.id}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  console.log('📥 Pedido baixado:', currentOrder.id);
}

/**
 * Carrega confirmação
 */
function loadConfirmation() {
  console.log('🚀 Carregando confirmação...');
  showLoading();
  
  try {
    // Tentar buscar do localStorage
    const orderData = localStorage.getItem('lastOrder');
    
    if (!orderData) {
      throw new Error('Pedido não encontrado. Realize um pedido primeiro.');
    }
    
    const order = JSON.parse(orderData);
    
    // Validar dados
    if (!order.id || !order.produto || !order.cliente) {
      throw new Error('Dados do pedido incompletos');
    }
    
    renderConfirmation(order);
    showSuccess();
    
    // Limpar localStorage após exibir
    // localStorage.removeItem('lastOrder');
    
    console.log('✅ Confirmação carregada com sucesso!');
  } catch (error) {
    showError(error.message);
    console.error('❌ Erro ao carregar confirmação:', error);
  }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  console.log('📄 DOM carregado - Iniciando confirmação...');
  loadConfirmation();
  
  // Event listener no botão download
  btnDownload.addEventListener('click', downloadOrderJSON);
});

// Exportar funções
window.confirmacaoPage = {
  loadConfirmation,
  downloadOrderJSON,
  formatPrice,
  formatDate
};
