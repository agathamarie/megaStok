const apiUrl = 'https://fakestoreapi.com/products';

// Função para carregar produtos favoritos
async function loadFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const favoritosContainer = document.getElementById('favoritos');

    if (favoritos.length === 0) {
        favoritosContainer.innerHTML = '<p>Nenhum produto favorito encontrado.</p>';
        return;
    }

    for (const productId of favoritos) {
        const response = await fetch(`${apiUrl}/${productId}`);
        const product = await response.json();
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h2>${product.title}</h2>
            <p>Preço: $${product.price}</p>
            <button class="remove" onclick="removeFromFavoritos(${productId})">Remover dos Favoritos</button>
        `;
        favoritosContainer.appendChild(productDiv);
    }
}


// Função para remover produto dos favoritos
function removeFromFavoritos(productId) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    favoritos = favoritos.filter(id => id !== productId);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    location.reload(); // Recarrega a página para atualizar a lista de favoritos
}

// Carregar produtos favoritos na página de favoritos
loadFavoritos();