const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = './src/css/templates/menu_editar.css';

document.head.appendChild(link);

const menuEdicao = () => {
    return `
        <div class="menu">
            <button id="adicionar">Adicionar produto</button>
            <button id="editar">Editar produto</button>
            <button id="deletar">Deletar produto</button>
        </div>
    `;
};

export default menuEdicao;




/* 
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
*/