import header from "../templates/header.js";
import fetchCategories from "./filtro.js";


const StoreContainer = document.querySelector("#StoreContainer");

// Aqui ele ira buscar todos os produtos na Fake Store ᓚ₍ ^. .^₎

const fetchProducts = async () => {
    const allProductsUrl = `https://fakestoreapi.com/products/`;
    const resp = await fetch(allProductsUrl);

    const data = await resp.json();

    data.forEach(product => createProductCard(product));
};

// Criação dos cards dos produtos !!

const createProductCard = (product) =>{
    const card = document.createElement('div');
    card.classList.add("StoreCard");

    const title = product.title || "Produto sem nome";
    const price = product.price ? `R$ ${product.price.toFixed(2)}` : "Preço Indisponível";
    const image = product.image;

    card.innerHTML = `
        <div class="imgContainer">
            <img src="${image}" alt="${title}" />
        </div>
        <div class="info">
            <h3 class="title">${title}</h3>
            <p class="price">${price}</p>
        </div>
    `;

    StoreContainer.appendChild(card);
};

fetchProducts();