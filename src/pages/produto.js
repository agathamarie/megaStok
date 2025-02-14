const StoreContainer = document.querySelector("#StoreContainer");


// Aqui ele ira buscar todos os produtos na Fake Store ᓚ₍ ^. .^₎
const fetchProducts = async (category = "") => {
    try {
        let url = `https://fakestoreapi.com/products/`;
        if (category) {
            url += `category/${category}`;
        }
        
        const resp = await fetch(url);
        const data = await resp.json();
        
        StoreContainer.innerHTML = "";
        data.forEach(product => createProductCard(product));
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
    }
};

// Criação dos cards dos produtos !!

const createProductCard = (product) => {
    const card = document.createElement('div');
    card.classList.add("StoreCard");

    const title = product.title || "Produto sem nome";
    const price = product.price ? `R$ ${product.price.toFixed(2)}` : "Preço Indisponível";
    const image = product.image;

    card.innerHTML = `
        <a href="./produto.html" style="text-decoration:none;">
            <div class="imgContainer">
                <img src="${image}" alt="${title}" />
            </div>
            <div class="info">
                <h3 class="title">${title}</h3>
                <p class="price">${price}</p>
            </div>
        </a>
    `;

    StoreContainer.appendChild(card);
};

export default fetchProducts;