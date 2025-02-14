import fetchProducts from "./produto.js";

const pesquisasContainer = document.querySelector("#pesquisas");

const fetchCategories = async () => {
    try {
        const categoriesUrl = `https://fakestoreapi.com/products/categories`;
        const categories = await fetch(categoriesUrl).then(res => res.json());

        pesquisasContainer.innerHTML = "";

        const selectElement = document.createElement('select');
        selectElement.classList.add("categoria"); 
        selectElement.innerHTML = `
            <option selected disabled>Selecionar Categoria</option>
            ${categories.map(category => `<option value="${category}">${category}</option>`).join('')}
        `;

        selectElement.addEventListener("change", (event) => {
            fetchProducts(event.target.value);
        });

        pesquisasContainer.appendChild(selectElement);
    } catch (error) {
        console.error("Erro ao buscar categorias:", error);
    }
    
};

fetchCategories();
export default fetchCategories;
    