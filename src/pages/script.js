import header from "../templates/header.js";
import fetchCategories from "./filtro.js";
import fetchProducts from "./produto.js";

document.body.insertAdjacentHTML("afterbegin", header());


fetchProducts();
fetchCategories();