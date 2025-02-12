const apiUrl = 'https://fakestoreapi.com/products';

// Função para carregar produtos na página inicial
async function loadProducts() {
    const response = await fetch(apiUrl);
    const products = await response.json();
    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h2>${product.title}</h2>
            <p>Preço: $${product.price}</p>
            <button onclick="addToFavoritos(${product.id})">Adicionar aos Favoritos</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

// Função para adicionar produto aos favoritos
function addToFavoritos(productId) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    if (!favoritos.includes(productId)) {
        favoritos.push(productId);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        alert('Produto adicionado aos favoritos!');
    } else {
        alert('Produto já está nos favoritos!');
    }
}

// Carregar produtos na página inicial
loadProducts();