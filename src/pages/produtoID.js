import fetchProducts from "./produto.js";

function buscarProdutoId () {
    const produtoAtual = new URLSearchParams(document.location.search).get('card');

    fetch(`https://fakestoreapi.com/products/${produtoAtual}`)
    .then(res => res.json())
    .then(json => {
        document.getElementById('StoreCard').innerHTML += fetchProducts(json)
    });
};

buscarProdutoId();