function createMenu() {
    const menu = document.createElement("div");
    const Adicionar_produto = document.createElement("button");
    const Editar_produto = document.createElement("button");
    const Deletar_produto = document.createElement("button");

    Adicionar_produto.textContent = 'Adicionar produto';
    menu.appendChild(Adicionar_produto);

    Editar_produto.textContent = 'Editar produto';
    menu.appendChild(Editar_produto);

    Deletar_produto.textContent = 'Deletar produto';
    menu.appendChild(Deletar_produto);

    document.body.appendChild(menu);

}

document.addEventListener('DOMContentLoaded', createMenu);