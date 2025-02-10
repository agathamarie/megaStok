const API_URL = 'https://fakestoreapi.com/products';
const API_URL2 = 'https://fakestoreapi.com/carts/user/2';
let cart = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || []; // Recupera os favoritos do localStorage
let allProducts = []; // Variável global para armazenar todos os produtos

// Função para buscar produtos
async function fetchProducts() {
    const response = await fetch(API_URL);
    allProducts = await response.json(); // Armazena os produtos em uma variável global
    displayProducts(allProducts);
}
async function fetchfavoritos() {
    const response = await fetch(API_URL2);
    allFavoritos = await response.json(); // Armazena os produtos em uma variável global
    displayProducts(allFavoritos);
}


// Função para exibir produtos na página inicial
function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.title}</h3>
            <img src="${product.image}" alt="${product.title}" width="100">
            <p>Preço: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
            <button onclick="addToFavorites(${product.id})">Adicionar aos Favoritos</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Função para adicionar produto ao carrinho
function addToCart(productId) {
    const product = cart.find(item => item.id === productId);
    if (!product) {
        cart.push({ id: productId, quantity: 1 });
    } else {
        product.quantity += 1;
    }
    alert('Produto adicionado ao carrinho!');
}

// Função para adicionar produto aos favoritos
function addToFavorites(productId) {
    if (!favorites.includes(productId)) {
        favorites.push(productId);
        localStorage.setItem('favorites', JSON.stringify(favorites)); // Armazena os favoritos no localStorage
        alert('Produto adicionado aos favoritos!');
    } else {
        alert('Produto já está nos favoritos!');
    }
}

// Função para exibir itens do carrinho
function displayCartItems() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Carrinho vazio.</p>';
        return;
    }

    cart.forEach(item => {
        const product = item; // Aqui você pode buscar o produto na API se necessário
        cartItems.innerHTML += `<p>Produto ID: ${item.id} - Quantidade: ${item.quantity}</p>`;
    });
}

// Função para exibir itens favoritos
function displayFavoriteItems() {
    const favoriteItems = document.getElementById('favorite-items');
    favoriteItems.innerHTML = '';

    if (favorites.length === 0) {
        favoriteItems.innerHTML = '<p>Nenhum favorito.</p>';
        return;
    }

    favorites.forEach(id => {
        const product = allFavoritos.find(product => product.id === id);
        if (product) {
            favoriteItems.innerHTML += `
                <div class="favorite-product">
                    <h3>${product.title}</h3>
                    <img src="${product.image}" alt="${product.title}" width="100">
                    <p>Preço: $${product.price}</p>
                </div>
            `;
        }
    });
}

// Verifica qual página está sendo carregada e executa a função apropriada
if (document.getElementById('product-list')) {
    fetchProducts();
}

if (document.getElementById('cart-items')) {
    displayCartItems();
}

if (document.getElementById('favorite-items')) {
    // Se a página de favoritos estiver sendo carregada, primeiro busque os produtos
    fetchProducts().then(() => {
        displayFavoriteItems(); // Exibe os favoritos após os produtos serem carregados
    });
}