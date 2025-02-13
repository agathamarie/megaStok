import {fetchProducts} from "./script";

const renderizarFiltro = document.querySelector("#pesquisas");

const fetchCategories = async () => {
    const categoriesurl = `https://fakestoreapi.com/products/categories`;





    const selectElement = document.createElement('select');
    selectElement.classList.add("categoria"); 

    const categories = await res.json();

    selectElement.InnerHTML = `
    <option selected disabled>Selecionar Categoria</option>
        ${categories.map(category => `<option value="${category}">${category}</option>`).join('')}
    `;


    productCategories.innerHTML = categoriesInnerHTML;
    
    if (renderizarFiltro) {
        renderizarFiltro.appendChild(selectElement);
    }
};

fetchCategories();
    