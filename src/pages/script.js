import header from "../templates/header.js";
import fetchCategories from "./filtro.js";
import fetchProducts from "./produto.js";


// Chama a header primeiro

document.body.insertAdjacentHTML("afterbegin", header());


//Chamando os produtos e categorias 

fetchProducts();
fetchCategories();
