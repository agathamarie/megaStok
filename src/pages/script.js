const StoreContainer = document.querySelector("#StoreContainer");
const StoreCount = 20;

// Aqui ele ira buscar todos os produtos na Fake Store ᓚ₍ ^. .^₎

const fetchProducts = async () => {
    for (let i = 1; i <= StoreCount; i++) {
        await getProduct(i);
    }
}

//Requisição, aonde vamos buscar os dados ⊹ 

const getProduct = async (id) => {
    const url = `https://fakestoreapi.com/products/${id}`;
    const resp = await fetch(url);
    const data = await resp.json();
    createproductCard(data);
}


// Criação dos cards dos produtos !!

const createproductCard = (product) =>{
    const card = document.createElement('div');
    card.classList.add("StoreCard");

    const title = product.title;
    const price = `R$ ${product.price.toFixed(2)}`
    const image = product.image;

    const productInnerHTML = `
    <div class="imgContainer">
        <img src="${image}" alt="${title}" />
    </div>
    <div class="info">
        <h3 class="title">${title}</h3>
        <p class="price">${price}</p>
    </div>
    `;

    card.innerHTML = productInnerHTML;
    StoreContainer.appendChild(card);
}

fetchProducts();